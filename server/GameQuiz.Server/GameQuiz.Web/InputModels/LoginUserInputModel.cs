using System.ComponentModel.DataAnnotations;

namespace GameQuiz.Web.InputModels
{
    public class LoginUserInputModel
    {
        [Required(ErrorMessage = "User Name is required")]
        public string Username { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }
    }
}
