using GameQuiz.Web.Data.Models;
using GameQuiz.Web.InputModels;
using GameQuiz.Web.Services.QuizService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
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
        [Route("/all/{id}")]
        public JsonResult All([FromRoute] string id = "1")
        {
            var quizzes = quizService.GetAll(int.Parse(id));
            return new JsonResult(quizzes);
        }

        [Authorize]
        [HttpPost]
        [Route("/quiz/create")]
        public IActionResult Create([FromBody]QuizInputModel quiz)
        {
            this.quizService.Create(quiz);
            return new JsonResult(quiz);
        }

        [HttpGet]
        [Authorize]
        [Route("/quiz/{id}")]
        public JsonResult GetById([FromRoute] string id)
        {
            var result = this.quizService.GetQuiz(id);
            return new JsonResult(result);
        }

        [HttpGet]
        [Route("/quiz/my-quizzes/{id}")]
        public async Task<JsonResult> GetQuizzesByUser([FromRoute] string id)
        {
            var result = await this.quizService.GetAllByUser(id);
            return new JsonResult(result);
        }

        [HttpPost]
        [Route("/quiz/result/{id}")]
        public async Task<JsonResult> GetResult(QuizResultInputModel  quiz)
        {
            var result = await quizService.GetResultAsync(quiz);
     
            return new JsonResult(result);
        }

    }
}
