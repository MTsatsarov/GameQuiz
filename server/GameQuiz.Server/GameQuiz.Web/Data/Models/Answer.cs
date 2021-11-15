using System.ComponentModel.DataAnnotations;

namespace GameQuiz.Web.Data.Models
{
    public class Answer
    {
        public Answer()
        {

        }

        [Key]
        public int Id { get; set; }
        [Required]
        [StringLength(150,MinimumLength =10)]
        public string Title { get; set; }
        public bool IsCorrect { get; set; }
        public int QuestionId { get; set; }
        public virtual Question Question { get; set; }
    }
}