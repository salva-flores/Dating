using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using DatingApp.API.Data;
using DatingApp.API.Dtos;
using DatingApp.API.Helpers;
using DatingApp.API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace DatingApp.API.Controllers
{
    [Authorize]
    [Route("api/users/{userId}/photos")]
    public class PhotosController : Controller
    {
        private readonly iDatingRepository _repo;
        private readonly IMapper _mapper;
        private readonly IOptions<CloudinarySettings> _cloudinaryConfig;
        private Cloudinary _cloudinary;

        public PhotosController(iDatingRepository repo, IMapper mapper, IOptions<CloudinarySettings> cloudinaryConfig)
        {
            _cloudinaryConfig = cloudinaryConfig;
            _mapper = mapper;
            _repo = repo;

            Account acc = new Account(
                _cloudinaryConfig.Value.CloudName,
                _cloudinaryConfig.Value.ApiKey,
                _cloudinaryConfig.Value.ApiSecret
            );
            _cloudinary = new Cloudinary(acc);
        }

        [HttpGet("{id}", Name = "GetPhoto")]
        public async Task<IActionResult> GetPhoto(int id)
        {
            var photoFromRepo = _repo.GetPhoto(id);
            var photo = _mapper.Map<PhotoForReturnDto>(photoFromRepo);
            return Ok(photo);
        }

        [HttpPost]
        public async Task<IActionResult> AddPhotoForUser(int userId, PhotoForCreationDto photoDto)
        {
            var user = await _repo.GetUser(userId); //get the user from the repo
            if (user == null) return BadRequest("No se pudo encontrar el usuario"); //..
            var currentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value); //check if user is currentuser
            if (currentUserId != user.Id) return Unauthorized();//compare 
            var file = photoDto.File; // store our file in here
            var uploadResult = new ImageUploadResult();
            if (file.Length > 0)
            {
                using (var stream = file.OpenReadStream())
                {
                    var uploadParams = new ImageUploadParams() { File = new FileDescription(file.Name, stream), Transformation = new Transformation().Width(500).Height(500).Crop("fill").Gravity("face") };
                    uploadResult = _cloudinary.Upload(uploadParams);
                }
            }
            photoDto.Url = uploadResult.Uri.ToString();
            photoDto.PublicId = uploadResult.PublicId;
            var photo = _mapper.Map<Photo>(photoDto); //MAP OUR dTO TO ENTITY
            photo.User = user;
            if (!user.Photos.Any(m => m.isMain)) photo.isMain = true;
            user.Photos.Add(photo);
            if (await _repo.SaveAll())
            {
                var photoToReturn = _mapper.Map<PhotoForReturnDto>(photo);
                return CreatedAtRoute("GetPhoto", new Photo { Id = photo.Id }, photoToReturn);
            }
            return BadRequest("No pudo subir la foto");
        }

        [HttpPost("{id}/setMain")]
        public async Task<IActionResult> SetMainPhoto(int userId, int id)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value)) return Unauthorized();
            var photoFromRepo = await _repo.GetPhoto(id);
            if (photoFromRepo == null) return NotFound();
            if (photoFromRepo.isMain) return BadRequest("Esta ya es la foto principal");
            var currentMainPhoto = await _repo.GetMainPhotoForUser(userId);
            if (currentMainPhoto != null) currentMainPhoto.isMain = false;
            photoFromRepo.isMain = true;
            if (await _repo.SaveAll()) return NoContent();
            return BadRequest("No se pudo establecer la foto principal.");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePhoto(int userId, int id)
        {
            if (userId != int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value)) return Unauthorized();
            var photoFromRepo = await _repo.GetPhoto(id);
            if (photoFromRepo == null) return NotFound();
            if (photoFromRepo.isMain) return BadRequest("No puede eliminar la foto principal");
            if (photoFromRepo.PublicId != null)
            {
                var deleteParams = new DeletionParams(photoFromRepo.PublicId);
                var result = _cloudinary.Destroy(deleteParams);
                if (result.Result == "ok") _repo.Delete(photoFromRepo);
            }
            else
            {
                _repo.Delete(photoFromRepo);
            }
            if (await _repo.SaveAll()) return Ok();
            return BadRequest("No se pudo eliminar la foto.");
        }
    }
}