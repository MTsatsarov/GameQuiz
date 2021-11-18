using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GameQuiz.Web.ViewModels
{
    public class PlayQuizViewModel
    {
        public string Id { get; set; }
        public string Name { get; set; }

        public ICollection<QuestionViewModel> Questions { get; set; }
    }
}
