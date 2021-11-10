using System.Collections.Generic;

namespace GameQuiz.Web.Data.Models
{
    public class Question
    {
        public Question()
        {
        }

        public int Id { get; set; }
        public string Title { get; set; }

        public string QuizId { get; set; }
        public Quiz Quiz { get; set; }
        public virtual ICollection<Answer> Answers { get; set; }
    }
}