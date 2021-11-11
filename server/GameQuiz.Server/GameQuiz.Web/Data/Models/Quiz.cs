using System;
using System.Collections.Generic;

namespace GameQuiz.Web.Data.Models
{
    public class Quiz
    {
        public Quiz()
        {
            this.Id = Guid.NewGuid().ToString();
        }
        public string Id { get; set; }
        public string Name { get; set; }

        public ICollection<Question> Questions { get; set; }
    }
}
