using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace GameQuiz.Web.InputModels
{
    public class QuestionUpdateInputModel
    {
        [StringLength(150,MinimumLength =10)]
        [Required]
        public string Title { get; set; }

        [Required]
        public string Id { get; set; }

        [Required]
        public string Correct { get; set; }

        public IEnumerable<AnswerUpdateInputModel> Answers { get; set; }

       
      
    }
}