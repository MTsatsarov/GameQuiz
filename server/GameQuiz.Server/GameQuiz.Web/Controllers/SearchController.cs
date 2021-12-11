using GameQuiz.Web.Services.QuizService;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GameQuiz.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SearchController : ControllerBase
    {
        private readonly IQuizService quizService;

        public SearchController(IQuizService quizService)
        {
            this.quizService = quizService;
        }
        [HttpGet("{name}")]
        public JsonResult Search(string name)
        {
            var model = this.quizService.Search(name);
            return new JsonResult(model);
        }
    }
}
