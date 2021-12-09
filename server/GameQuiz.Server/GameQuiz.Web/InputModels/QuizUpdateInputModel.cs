
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace GameQuiz.Web.InputModels
{
    public class QuizUpdateInputModel
    {
        [Required]
        public string Id { get; set; }
        [StringLength(50,MinimumLength =5)]
        [Required]
        public string Name { get; set; }
        public IEnumerable<QuestionUpdateInputModel>  Questions{ get; set; }
    }
}
