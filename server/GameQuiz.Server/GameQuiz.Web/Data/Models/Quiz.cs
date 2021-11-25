using GameQuiz.Web.Data.Data.Common;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GameQuiz.Web.Data.Models
{
    public class Quiz:BaseDeletableModel<string>
    {
        public Quiz()
        {
            this.Id = Guid.NewGuid().ToString();
            this.Questions = new HashSet<Question>();
            this.Votes = new HashSet<Vote>();
            this.Users = new HashSet<ApplicationUser>();
        }
        [Required]
        [StringLength(50, MinimumLength = 5)]
        public string Name { get; set; }
        public int Taken { get; set; }


        public string UserId { get; set; }

        public virtual ICollection<ApplicationUser> Users { get; set; }

        public string CreatorId { get; set; }
        public virtual ICollection<Vote> Votes { get; set; }
        public virtual ICollection<Question> Questions { get; set; }
    }
}
