using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GameQuiz.Web.ViewModels
{
    public class QuizListViewModel
    {
        public bool HasNextPage => this.TotalPages >= CurrentPage+1;
        public bool HasPreviousPage => this.CurrentPage > 1;
        public int CurrentPage { get; set; }
        public int TotalPages => (int)Math.Ceiling((double)this.QuizzesCount / this.ItemsPerPage);
        public int QuizzesCount { get; set; }
        public int ItemsPerPage { get; set; }
        public List<QuizViewModel> Quizzes { get; set; }

    }
}
