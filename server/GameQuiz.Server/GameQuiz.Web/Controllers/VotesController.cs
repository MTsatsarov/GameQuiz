using GameQuiz.Web.InputModels;
using GameQuiz.Web.Services.VotesService;
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
        private readonly VotesService votesService;

        public VotesController(VotesService votesService)
        {
            this.votesService = votesService;
        }
        // POST api/<VotesController>
        [HttpPost]
        [Route("/Votes/Vote")]
        public IActionResult Vote([FromBody] QuizVoteInputModel model)
        {
            //TODO FIX BUG 500
            var result =  this.votesService.VoteForQuizAsync(model);
            return new JsonResult(result) ;
        }

    }
}
