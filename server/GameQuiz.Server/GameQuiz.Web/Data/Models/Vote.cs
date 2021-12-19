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

        [Required]
        [Range(1,5)]
        public int Grade { get; set; }
        [Required]
        public string QuizId { get; set; }
        public virtual Quiz Quiz { get; set; }

        public  string UserId { get; set; }
        public virtual ApplicationUser User { get; set; }
    }
}
