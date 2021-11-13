using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace GameQuiz.Web.Data.Models
{
    public class Question
    {
        public Question()
        {
            this.Answers = new HashSet<Answer>();
        }

        [Key]
        public int Id { get; set; }
        public string Title { get; set; }

        public string QuizId { get; set; }
        public Quiz Quiz { get; set; }
        public virtual ICollection<Answer> Answers { get; set; }
    }
}