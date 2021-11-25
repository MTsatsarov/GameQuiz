using GameQuiz.Web.Data.Data.Common;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GameQuiz.Web.Data.Models
{
    public class Vote:BaseDeletableModel<int>
    {
        public Vote()
        {
            this.Users = new HashSet<ApplicationUser>();
        }

        [Required]
        [Range(1,5)]
        public int Grade { get; set; }
        [Required]
        public string QuizId { get; set; }
        public virtual Quiz Quiz { get; set; }

        public virtual ICollection<ApplicationUser> Users { get; set; }
    }
}
