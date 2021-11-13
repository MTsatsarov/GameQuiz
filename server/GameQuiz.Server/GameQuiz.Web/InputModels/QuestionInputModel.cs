using Newtonsoft.Json;

namespace GameQuiz.Web.InputModels
{
    public class QuestionInputModel
    {
        [JsonProperty("name")]
        public string Title { get; set; }
        [JsonProperty("firstAnswer")]
        public string FirstAnswer { get; set; }
        [JsonProperty("secondAnswer")]
        public string SecondAnswer { get; set; }
        [JsonProperty("thirdAnswer")]
        public string ThirdAnswer { get; set; }
        [JsonProperty("fourthAnswer")]
        public string FourthAnswer { get; set; }
        [JsonProperty("correctAnswer")]
        public int CorrectIndex { get; set; }


    }
}