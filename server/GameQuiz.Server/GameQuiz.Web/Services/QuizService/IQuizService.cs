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
        QuizListViewModel GetAll(int page);
        PlayQuizViewModel GetQuiz(string id);
        void Update(QuizUpdateInputModel model);
        void Delete(string id);
        QuizListViewModel GetAllByUser(string id,int page);
        Task<QuizResultViewModel> GetResultAsync(QuizResultInputModel model);
        void Create(QuizInputModel quiz);
        int GetCount();
    }
}
