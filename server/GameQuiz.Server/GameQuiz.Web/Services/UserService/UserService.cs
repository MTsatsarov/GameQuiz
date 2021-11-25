using GameQuiz.Web.Data;
using GameQuiz.Web.Data.Models;
using GameQuiz.Web.InputModels;
using GameQuiz.Web.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace GameQuiz.Web.Services.UserService
{
    public class UserService : IUserService
    {
        private readonly ApplicationDbContext db;
        private readonly UserManager<ApplicationUser> userManager;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly IConfiguration _configuration;

        public UserService(ApplicationDbContext db ,UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager, IConfiguration configuration)
        {
            this.db = db;
            this.userManager = userManager;
            this.roleManager = roleManager;
            _configuration = configuration;
        }
        public async Task<string> Register(UserRegisterInputModel model)
        {
            var userExists = await this.userManager.FindByNameAsync(model.Username);
            if (userExists != null)
            {
                throw new ArgumentException("User creation failed! Please check user details and try again.");

            }

            ApplicationUser user = new ApplicationUser()
            {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.Username
            };
            var result = await this.userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
            {
                throw new ArgumentException("User creation failed! Please check user details and try again.");
            }

            return "User created successfully!";
        }

        public async Task<UserModel> Login(LoginUserInputModel model)
        {
            var user = await userManager.FindByNameAsync(model.Username);
            if (user != null && await userManager.CheckPasswordAsync(user, model.Password))
            {
                var userRoles = await userManager.GetRolesAsync(user);

                var authClaims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.UserName),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                };

                foreach (var userRole in userRoles)
                {
                    authClaims.Add(new Claim(ClaimTypes.Role, userRole));
                }

                var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

                var token = new JwtSecurityToken(
                    issuer: _configuration["JWT:ValidIssuer"],
                    audience: _configuration["JWT:ValidAudience"],
                    expires: DateTime.Now.AddHours(3),
                    claims: authClaims,
                    signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                    );
                var currUser = this.db.Users.Where(x => x.UserName == model.Username).FirstOrDefault();
                var currUserModel = new UserModel()
                {
                    Token = token,
                    UserId = currUser.Id,
                    Username = currUser.UserName
                };

                return currUserModel;
            }
            throw new ArgumentException("User not found");
        }


        public async Task<string> RegisterAdmin(UserRegisterInputModel model)
        {
            var userExists = await userManager.FindByNameAsync(model.Username);
            if (userExists != null)
            {
                throw new ArgumentException("User already exists!");
            }

            ApplicationUser user = new ApplicationUser()
            {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.Username
            };
            var result = await userManager.CreateAsync(user, model.Password);
            if (!result.Succeeded)
            {
                throw new ArgumentException("User creation failed! Please check user details and try again.");
            }

            if (!await roleManager.RoleExistsAsync(UserRoles.Admin))
                await roleManager.CreateAsync(new IdentityRole(UserRoles.Admin));
            if (!await roleManager.RoleExistsAsync(UserRoles.User))
                await roleManager.CreateAsync(new IdentityRole(UserRoles.User));

            if (await roleManager.RoleExistsAsync(UserRoles.Admin))
            {
                await userManager.AddToRoleAsync(user, UserRoles.Admin);
            }

            return "User created successfully!";
        }
    }
}
