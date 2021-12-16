using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GameQuiz.Web.ViewModels
{
    public class QuestionViewModel
    {
        public string Id { get; set; }
        public string Title { get; set; }

        public ICollection<AnswerPlayModel> Answers{ get; set; }
        public string Correct { get; set; }
    }
}
