using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;

namespace GameQuiz.Web.ViewModels
{
    public class UserModel
    {
        public JwtSecurityToken Token { get; set; }

        public string UserId { get; set; }

        public string Username { get; set; }
    }
}
