using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace GameQuiz.Web.Data.Models
{
    public class Quiz
    {
        public Quiz()
        {
            this.Id = Guid.NewGuid().ToString();
            this.Questions = new HashSet<Question>();
        }
        [Key]
        public string Id { get; set; }
        public string Name { get; set; }

        public ICollection<Question> Questions { get; set; }
    }
}
