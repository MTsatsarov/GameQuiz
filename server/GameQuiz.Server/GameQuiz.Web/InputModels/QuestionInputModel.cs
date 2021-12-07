using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace GameQuiz.Web.InputModels
{
    public class QuestionInputModel
    {
        [Required]
        [StringLength(150, MinimumLength = 10)]
        public string Title { get; set; }

        public ICollection<string> AnswerArray { get; set; }

        [Required]
        public string Correct { get; set; }


    }
}