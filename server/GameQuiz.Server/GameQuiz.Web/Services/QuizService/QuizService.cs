using GameQuiz.Web.Data;
using GameQuiz.Web.InputModels;
using GameQuiz.Web.ViewModels;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GameQuiz.Web.Services.QuizService
{
    public class QuizService : IQuizService
    {
        private readonly ApplicationDbContext db;

        public QuizService(ApplicationDbContext db)
        {
            this.db = db;
        }

        public Task Create(QuizInputModel quiz)
        {
            var q = quiz;
            return null;
        }

        public IEnumerable<QuizViewModel> GetAll()
        {
            var quizzesToReturn = new List<QuizViewModel>();
            var dbQuizzes = this.db.Quizzes.ToList();

            foreach (var quiz in dbQuizzes)
            {
                var currQuiz = new QuizViewModel()
                {
                    Name=quiz.Name,
                   
                };
                quizzesToReturn.Add(currQuiz);
            }
            return quizzesToReturn;
        }

        public PlayQuizViewModel GetQuiz(string id)
        {
            var quiz = this.db.Quizzes.FirstOrDefault(x => x.Id == id);
            var quizToReturn = new PlayQuizViewModel();


            return quizToReturn;
        }
    }
}
