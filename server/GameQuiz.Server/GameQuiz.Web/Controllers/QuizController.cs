using GameQuiz.Web.InputModels;
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
        [HttpGet]
        [Route("/quiz/all")]
        public string All()
        {
            return "hello";
        }

        [HttpPost]
        [Route("/quiz/create")]
        public JsonResult Create(string quiz)
        {
            var result = new QuizInputModel()
            {
                Name = "Gosho"
            };
            return new JsonResult(result);
        }

        [HttpGet]
        [Route("/quiz/{id}")]
        public JsonResult GetById([FromRoute] string id)
        {
            return new JsonResult(id);
        }
    }
}
