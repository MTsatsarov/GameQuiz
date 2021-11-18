using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GameQuiz.Web.ViewModels
{
    public class QuestionViewModel
    {
        public string Title { get; set; }

        public string FirstAnswer { get; set; }
        public string SecondAnswer { get; set; }
        public string ThirdAnswer { get; set; }
        public string FourthAnswer { get; set; }
        public int CorrectIndex { get; set; }
    }
}
