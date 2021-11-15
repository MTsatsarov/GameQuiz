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
        public string Title { get; set; }
        public bool IsCorrect { get; set; }
        public int QuestionId { get; set; }
        public virtual Question Question { get; set; }
    }
}