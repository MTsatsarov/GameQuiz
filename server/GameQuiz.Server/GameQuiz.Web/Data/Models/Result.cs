using GameQuiz.Web.Data.Data.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GameQuiz.Web.Data.Models
{
    public class Result : BaseDeletableModel<int>
    {
        public Result()
        {

        }
        public double Percentage { get; set; }
        public int Points { get; set; }

        public int TotalPoints { get; set; }
        public string UserId { get; set; }

        public virtual ApplicationUser User { get; set; }

        public string QuizId { get; set; }

        public virtual Quiz Quiz { get; set; }
    }
}
