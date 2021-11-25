using Newtonsoft.Json;

namespace GameQuiz.Web.InputModels
{
    public class QuizVoteInputModel
    {
        public string Quiz { get; set; }

        public int Grade { get; set; }
        public string UserId { get; set; }
    }
}
