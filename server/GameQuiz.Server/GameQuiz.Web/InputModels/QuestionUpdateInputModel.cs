using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace GameQuiz.Web.InputModels
{
    public class QuestionUpdateInputModel
    {
        [Required]
        public string Id { get; set; }
        [StringLength(150,MinimumLength =10)]
        [Required]
        public string Name { get; set; }

        public IEnumerable<AnswerUpdateInputModel> Answers{ get; set; }
        [Required]
        public string Correct { get; set; }
    }
}