using GameQuiz.Web.Data.Data.Common;
using System;
using System.ComponentModel.DataAnnotations;

namespace GameQuiz.Web.Data.Models
{
    public class Answer:BaseDeletableModel<string>
    {
        public Answer()
        {
            this.Id = Guid.NewGuid().ToString();
        }
        [Required]
        [StringLength(150,MinimumLength =1)]
        public string Title { get; set; }
        public bool IsCorrect { get; set; }
        public string QuestionId { get; set; }
        public virtual Question Question { get; set; }
    }
}