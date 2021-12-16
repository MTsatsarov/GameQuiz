using System.ComponentModel.DataAnnotations;

namespace GameQuiz.Web.InputModels
{
    public class AnswerUpdateInputModel
    {
        [Required]
        public string Id { get; set; }
        [StringLength(150, MinimumLength = 10)]
        [Required]
        public string Title { get; set; }
    }
}