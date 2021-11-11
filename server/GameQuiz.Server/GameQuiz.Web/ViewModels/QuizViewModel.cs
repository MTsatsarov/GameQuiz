using Newtonsoft.Json;

namespace GameQuiz.Web.ViewModels
{
    public class QuizViewModel
    {
        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("taken")]
        public int Taken { get; set; }
        [JsonProperty("votesCount")]
        public int VotesCount { get; set; }

        [JsonProperty("grade")]
        public int grade { get; set; }
    }
}
