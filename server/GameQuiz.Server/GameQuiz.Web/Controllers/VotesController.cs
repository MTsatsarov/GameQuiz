using GameQuiz.Web.InputModels;
using GameQuiz.Web.Services.VotesService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GameQuiz.Web.Controllers
{
    [ApiController]
    public class VotesController : ControllerBase
    {
        private readonly IVotesService votesService;

        public VotesController(IVotesService votesService)
        {
            this.votesService = votesService;
        }
        // POST api/<VotesController>
        [Authorize]
        [HttpPost]
        [Route("vote/quiz")]
        public async  Task<JsonResult> Vote([FromBody] QuizVoteInputModel model)
        {
            var result =  await this.votesService.VoteForQuizAsync(model);
            return new JsonResult(result);
        }

    }
}
