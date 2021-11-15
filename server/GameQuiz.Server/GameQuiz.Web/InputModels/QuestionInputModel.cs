using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GameQuiz.Web.InputModels
{
    public class QuestionInputModel
    {
        [JsonProperty("name")]
        [Required]
        [StringLength(150, MinimumLength = 10)]
        public string Title { get; set; }
        [JsonProperty("firstAnswer")]
        [Required]

        public string FirstAnswer { get; set; }
        [JsonProperty("secondAnswer")]
        [Required]

        public string SecondAnswer { get; set; }
        [JsonProperty("thirdAnswer")]
        [Required]

        public string ThirdAnswer { get; set; }
        [JsonProperty("fourthAnswer")]
        [Required]
        public string FourthAnswer { get; set; }

        [JsonProperty("correctAnswer")]
        [Required]
        [Range(1,4)]
        public int CorrectIndex { get; set; }


    }
}