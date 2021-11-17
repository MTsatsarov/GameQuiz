using GameQuiz.Web.Data;
using GameQuiz.Web.Data.Models;
using GameQuiz.Web.InputModels;
using GameQuiz.Web.ViewModels;
using System;
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


        public VoteQuizVIewModel VoteForQuizAsync(QuizVoteInputModel model)
        {
            this.db.Votes.Add(new Vote() { Grade = model.Grade, QuizId = model.Quiz });
            this.db.SaveChanges();
            var result = this.db.Votes.Where(x => x.QuizId == model.Quiz).ToList();
            var voteModel = new VoteQuizVIewModel
            {
                VoteCount = result.Count(),
                Grade = Math.Round(result.Average(x => x.Grade), 2)
            };

            return voteModel;

        }
    }
}
