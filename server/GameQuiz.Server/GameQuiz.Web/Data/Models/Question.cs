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
        [Required]
        [StringLength(150, MinimumLength = 10)]
        public string Title { get; set; }
        [Required]
        public string QuizId { get; set; }
        public Quiz Quiz { get; set; }
        public virtual ICollection<Answer> Answers { get; set; }
    }
}