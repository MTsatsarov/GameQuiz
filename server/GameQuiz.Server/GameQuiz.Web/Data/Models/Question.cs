using GameQuiz.Web.Data.Data.Common;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace GameQuiz.Web.Data.Models
{
    public class Question: BaseDeletableModel<string>
    {
        public Question()
        {
            this.Id = Guid.NewGuid().ToString();
            this.Answers = new HashSet<Answer>();
        }
        [Required]
        [StringLength(150, MinimumLength = 5)]
        public string Title { get; set; }
        [Required]
        public string QuizId { get; set; }
        public virtual Quiz Quiz { get; set; }
        public virtual ICollection<Answer> Answers { get; set; }
    }
}