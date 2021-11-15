using Newtonsoft.Json;

namespace GameQuiz.Web.InputModels
{
    public class QuizVoteInputModel
    {
        [JsonProperty("quiz")]
        public string Quiz { get; set; }

        [JsonProperty("grade")]
        public int Grade { get; set; }
    }
}
