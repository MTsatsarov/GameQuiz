using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace GameQuiz.Web.InputModels
{
    public class QuizInputModel
    {
        [Required]
        [StringLength(50, MinimumLength = 5)]
        public string Name { get; set; }

        public IEnumerable<QuestionInputModel> Questions { get; set; }

        public string Creator { get; set; }
    }
}
