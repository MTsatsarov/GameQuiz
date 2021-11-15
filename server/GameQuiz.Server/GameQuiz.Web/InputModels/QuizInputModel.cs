using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace GameQuiz.Web.InputModels
{
    public class QuizInputModel
    {
        [JsonProperty("name")]
        [Required]
        [StringLength(50, MinimumLength = 5)]
        public string Name { get; set; }

        [JsonProperty("questionsArray")]
        public IEnumerable<QuestionInputModel> Questions { get; set; }
    }
}
