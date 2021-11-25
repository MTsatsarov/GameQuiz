using GameQuiz.Web.InputModels;
using GameQuiz.Web.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GameQuiz.Web.Services.VotesService
{
    public interface IVotesService
    {
        public Task<VoteQuizVIewModel> VoteForQuizAsync(QuizVoteInputModel model);
    }
}
