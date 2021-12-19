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


        public async Task<VoteQuizVIewModel> VoteForQuizAsync(QuizVoteInputModel model)
        {
            var curr = db.Quizzes.FirstOrDefault(x => x.Id == model.Quiz);
            if (!curr.Votes.Any(x => x.UserId == model.UserId))
            {
                await this.db.Votes.AddAsync(new Vote()
                {
                    Grade = model.Grade,
                    QuizId = model.Quiz,
                    UserId = model.UserId
                });
            }
            else
            {
                var vote = curr.Votes.Where(x => x.UserId == model.UserId).First();
                vote.Grade = model.Grade;
                this.db.Votes.Update(vote);
            }
            await this.db.SaveChangesAsync();
            var result = this.db.Votes.Where(x => x.QuizId == model.Quiz).ToList();
            var voteToReturn = new VoteQuizVIewModel
            {
                VoteCount = result.Count(),
                Grade = Math.Round(result.Average(x => x.Grade), 2)
            };


            return voteToReturn;
        }
    }
}

