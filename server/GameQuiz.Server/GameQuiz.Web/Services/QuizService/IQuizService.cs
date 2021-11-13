using GameQuiz.Web.InputModels;
using GameQuiz.Web.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GameQuiz.Web.Services.QuizService
{
    public interface IQuizService
    {
        IEnumerable<QuizViewModel> GetAll();
        PlayQuizViewModel GetQuiz(string id);

         void Create(QuizInputModel quiz);
    }
}
