using GameQuiz.Web.InputModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GameQuiz.Web.Services.VotesService
{
    public interface IVotesService
    {
        public int VoteForQuizAsync(QuizVoteInputModel model);
    }
}
