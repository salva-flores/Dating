using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using DatingApp.API.Data;
using DatingApp.API.Dtos;
using DatingApp.API.helpers;
using DatingApp.API.Helpers;
using DatingApp.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{
    [Authorize]
    [ServiceFilter(typeof(UserLog))]
    [Route("api/users/{userId}/[controller]")]
    public class MessagesController : Controller
    {
        private readonly IDatingRepository _repo;
        private readonly IMapper _mapper;
        public MessagesController(IDatingRepository repository, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repository;
        }
        [HttpGet("{id}", Name = "GetMessage")]
        public async Task<IActionResult> GetMessage(int userId, int id)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value)) return Unauthorized();
            var messageFromRepo = await _repo.GetMessage(id);
            if (messageFromRepo == null) return NotFound();
            return Ok(messageFromRepo);
        }
        [HttpGet("thread/{id}")]
        public async Task<IActionResult> GetMessagesThread(int userId, int id)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value)) return Unauthorized();
            var messageFromRepo = await _repo.GetMessageThread(userId, id);
            var messageThread = _mapper.Map<IEnumerable<MessageToReturnDto>>(messageFromRepo);
            return Ok(messageThread);
        }
        [HttpGet]
        public async Task<IActionResult> GetMessagesForUser(int userId, MessageParams messageParams)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value)) return Unauthorized();
            var messagesFromRepo = await _repo.GetMessagesForUser(messageParams);
            var messages = _mapper.Map<IEnumerable<MessageToReturnDto>>(messagesFromRepo);
            Response.AddPagination(messagesFromRepo.CurrentPage, messagesFromRepo.PageSize, messagesFromRepo.TotalCount, messagesFromRepo.TotalPages);
            return Ok(messages);
        }
        [HttpPost]
        public async Task<IActionResult> CreateMessage(int userId, [FromBody] MessageForCreationDto messageForCreationDto)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value)) return Unauthorized();
            messageForCreationDto.SenderId = userId;
            var recipient = await _repo.GetUser(messageForCreationDto.RecipientId);
            var sender = await _repo.GetUser(messageForCreationDto.SenderId);
            if (recipient == null) return BadRequest("No se pudo encontrar el usuario!");
            var message = _mapper.Map<Message>(messageForCreationDto);
            _repo.Add(message);
            var messageToReturn = _mapper.Map<MessageToReturnDto>(message);
            if (await _repo.SaveAll()) return CreatedAtRoute("GetMessage", new { id = message.Id }, messageToReturn);
            throw new Exception("No se pudo crear el mensaje!");
        }
        [HttpPost("{id}")]
        public async Task<IActionResult> DeleteMessage(int id, int userId)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value)) return Unauthorized();
            var messageFromRepo = await _repo.GetMessage(id);
            if (messageFromRepo.SenderId == userId) { messageFromRepo.SenderDeleted = true; }
            if (messageFromRepo.RecipientId == userId) { messageFromRepo.RecipientDeleted = true; }
            if (messageFromRepo.SenderDeleted && messageFromRepo.RecipientDeleted) { _repo.Delete(messageFromRepo); }
            if (await _repo.SaveAll()) return NoContent();
            throw new Exception("No se pudo borrar el mensaje!");

        }
        [HttpPost("{id}/read")]
        public async Task<IActionResult> MarkMessageAsRead(int userId, int id)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value)) return Unauthorized();
            var message = await _repo.GetMessage(id);
            if (message.RecipientId != userId) return BadRequest("No se pudo marcar como leído!!");
            message.IsRead = true;
            message.DateRead = DateTime.Now;
            await _repo.SaveAll();
            return NoContent();
        }
    }
}