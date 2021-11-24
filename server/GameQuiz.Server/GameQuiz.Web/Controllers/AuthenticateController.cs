using GameQuiz.Web.Data.Models;
using GameQuiz.Web.InputModels;
using GameQuiz.Web.Services.UserService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Threading.Tasks;

namespace GameQuiz.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthenticateController : ControllerBase
    {
        public readonly IUserService userService;

        public AuthenticateController(IUserService userService)
        {
            this.userService = userService;
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> LoginUser([FromBody] LoginUserInputModel model)
        {
            try
            {
                var token = await this.userService.Login(model);
                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token),
                    expiration = token.ValidTo
                });
            }
            catch (Exception ex)
            {
                return this.BadRequest(ex.Message);
                
            }
          

           
        }
        [HttpPost]
        [Route("register")]
        public async Task<JsonResult> RegisterUser([FromBody] UserRegisterInputModel model)
        {
            var result = await this.userService.Register(model);

            return new JsonResult(new
            {
                status = result
            });
        }

        [HttpPost]
        [Route("register-admin")]
        public async Task<IActionResult> RegisterAdmin([FromBody] UserRegisterInputModel model)
        {
            var result =await this.userService.RegisterAdmin(model);

            return Ok(new
            {
                status = result
            });
        }
    }
}

