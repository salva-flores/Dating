using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using DatingApp.API.Data;
using DatingApp.API.Dtos;
using DatingApp.API.helpers;
using DatingApp.API.Helpers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{
    [ServiceFilter(typeof(UserLog))]
    [Authorize]
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        private readonly iDatingRepository _repo;
        private readonly IMapper _mapper;
        public UsersController(iDatingRepository repo, IMapper mapper) { _repo = repo; _mapper = mapper; }
        [HttpGet]
        public async Task<IActionResult> GetUsers(UserParams userParams)
        { 
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value); 
            var userFromRepo = await _repo.GetUser(currentUserId);
            userParams.UserId = currentUserId;
            if (string.IsNullOrEmpty(userParams.Gender)){userParams.Gender = userFromRepo.Gender == "male" ? "female" : "male"; }
            var users = await _repo.GetUsers(userParams); 
            var usersToReturn = _mapper.Map<IEnumerable<UserForListDto>>(users); 
            Response.AddPagination(users.CurrentPage, users.PageSize, users.TotalCount, users.TotalPages);
            return Ok(usersToReturn); 
        }
        
        [HttpGet("{id}", Name = "GetUser")]
        public async Task<IActionResult> GetUser(int id) { var user = await _repo.GetUser(id); var userToReturn = _mapper.Map<UserForDetailDto>(user); return Ok(userToReturn); }
        
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, [FromBody] UserForUpdateDto userForUpdateDto)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            var userFromRepo = await _repo.GetUser(id);
            if (userFromRepo == null) return NotFound($"No pudo encotrar el usuario {id}");
            if (currentUserId != userFromRepo.Id) return Unauthorized();
            _mapper.Map(userForUpdateDto, userFromRepo);
            if(await _repo.SaveAll()) return NoContent();
            throw new Exception($"Error al actualizar el usuario {id}");
        }
    }
}