using GameQuiz.Web.InputModels;
using System.IdentityModel.Tokens.Jwt;
using System.Threading.Tasks;

namespace GameQuiz.Web.Services.UserService
{
   public interface IUserService
    {
        public Task<JwtSecurityToken> Login(LoginUserInputModel model);
        public Task<string> Register(UserRegisterInputModel model);

        public Task<string> RegisterAdmin(UserRegisterInputModel model);
    }
}
