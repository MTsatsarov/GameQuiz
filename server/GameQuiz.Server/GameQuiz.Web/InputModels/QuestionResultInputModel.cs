using System.ComponentModel.DataAnnotations;

namespace GameQuiz.Web.InputModels
{
    public class QuestionResultInputModel
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Answer { get; set; }
    }
}