using GameQuiz.Web.InputModels;
using GameQuiz.Web.Services.QuizService;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GameQuiz.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QuizController : ControllerBase
    {
        private readonly IQuizService quizService;

        public QuizController(IQuizService quizService)
        {
            this.quizService = quizService;
        }

        [HttpGet]
        [Route("/quiz/all")]
        public JsonResult All()
        {
            var quizzes = quizService.GetAll();
            return new JsonResult(quizzes);
        }

        [HttpPost]
        [Route("/quiz/create")]
        public IActionResult Create([FromBody]QuizInputModel quiz)
        {
            this.quizService.Create(quiz);
            return new JsonResult(quiz);
        }

        [HttpGet]
        [Route("/quiz/{id}")]
        public JsonResult GetById([FromRoute] string id)
        {
            return new JsonResult(id);
        }
    }
}
