using GameQuiz.Web.InputModels;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace GameQuiz.Web.Controllers
{
    [ApiController]
    [EnableCors]
    [Route("api/[controller]")]
    public class QuizController : ControllerBase
    {
        [HttpGet]
        [Route("/quiz/all")]
        public string All()
        {
            return "hello";
        }

        [HttpPost]
        [Route("/quiz/create")]
        public IActionResult Create(QuizInputModel quiz)
        {
            var q = quiz;
            return this.Ok();
        }

        [HttpGet]
        [Route("/quiz/{id}")]
        public string GetById([FromRoute] string id)
        {
            return $"{id}";
        }
    }
}
