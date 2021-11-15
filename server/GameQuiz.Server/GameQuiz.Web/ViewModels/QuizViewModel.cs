using Newtonsoft.Json;

namespace GameQuiz.Web.ViewModels
{
    public class QuizViewModel
    {
        [JsonProperty("id")]
        public string Id { get; set; }
        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("taken")]
        public int Taken { get; set; }

        [JsonProperty("votesCount")]
        public int VotesCount { get; set; }


        [JsonProperty("grade")]
        public double Grade { get; set; }
    }
}
