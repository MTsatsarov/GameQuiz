using Microsoft.AspNetCore.Mvc;

namespace GameQuiz.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QuizController : ControllerBase
    {
        [HttpGet]
        [Route("/quiz/all")]
        public string All()
        {
            return "hello";
        }

        [HttpGet]
        [Route("/quiz/{id}")]
        public string GetById([FromRoute] string id)
        {
            return $"{id}";
        }
    }
}
