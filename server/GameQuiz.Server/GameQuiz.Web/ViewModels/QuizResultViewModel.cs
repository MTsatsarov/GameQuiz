using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GameQuiz.Web.ViewModels
{
    public class QuizResultViewModel
    {
        public int Score { get; set; }
        public int MaxScore { get; set; }
        public double Percentage => ((double)(this.Score) / (double)(this.MaxScore)) * 100;
    }
}
