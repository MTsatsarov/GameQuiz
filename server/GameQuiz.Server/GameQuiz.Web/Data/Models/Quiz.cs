using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GameQuiz.Web.Data.Models
{
    public class Quiz
    {
        public Quiz()
        {
            this.Id = Guid.NewGuid().ToString();
            this.Questions = new HashSet<Question>();
            this.Votes = new HashSet<Vote>();
        }

        [Key]
        public string Id { get; set; }
        [Required]
        [StringLength(50,MinimumLength =5)]
        public string Name { get; set; }
        public int Taken { get; set; }
        public virtual ICollection<Vote> Votes { get; set; }
        public virtual ICollection<Question> Questions { get; set; }
    }
}
