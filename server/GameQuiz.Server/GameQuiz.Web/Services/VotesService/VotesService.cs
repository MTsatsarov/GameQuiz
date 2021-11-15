using GameQuiz.Web.Data;
using GameQuiz.Web.Data.Models;
using GameQuiz.Web.InputModels;
using System.Linq;
using System.Threading.Tasks;

namespace GameQuiz.Web.Services.VotesService
{
    public class VotesService : IVotesService
    {
        private readonly ApplicationDbContext db;

        public VotesService(ApplicationDbContext db)
        {
            this.db = db;
        }


        public int VoteForQuizAsync(QuizVoteInputModel model)
        {
            this.db.Votes.Add(new Vote() { Grade = model.Grade, QuizId = model.Quiz });
            this.db.SaveChanges();
            return db.Quizzes.Where(x => x.Id == model.Quiz).FirstOrDefault().Votes.Count();

        }
    }
}
