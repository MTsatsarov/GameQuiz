using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

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
