using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GameQuiz.Web.InputModels
{
    public class QuizInputModel
    {
        public QuizInputModel()
        {
            //this.Questions = new List<QuestionInputModel>();
        }
        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("questionsArray")]
        public IEnumerable<QuestionInputModel> Questions { get; set; }
    }
}
