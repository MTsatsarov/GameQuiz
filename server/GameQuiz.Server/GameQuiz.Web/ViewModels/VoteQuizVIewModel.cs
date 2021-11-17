using Newtonsoft.Json;


namespace GameQuiz.Web.ViewModels
{
    public class VoteQuizVIewModel
    {
       [JsonProperty("count")]
        public int VoteCount { get; set; }
        [JsonProperty("grade")]
        public double Grade { get; set; }
    }
}
