using System;

namespace GameQuiz.Data.Models
{
  public  class Quiz
    {
        public Quiz()
        {
            this.Id = Guid.NewGuid().ToString();
        }

        public string Id { get; set; }
        public string Name { get; set; }
    }
}
