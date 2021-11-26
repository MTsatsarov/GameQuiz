using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GameQuiz.Web.InputModels
{
    public class QuizResultInputModel
    {
        public QuizResultInputModel()
        {
            this.QuestionsArray = new HashSet<QuestionResultInputModel>();
        }
        [Required]
        public string Id { get; set; }

        public ICollection<QuestionResultInputModel> QuestionsArray { get; set; }
    }
}
