using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace GameQuiz.Web.Data.Models
{
    public class ApplicationUser:IdentityUser
    {
        public ApplicationUser()
        {
            this.Quizzes = new HashSet<Quiz>();
            this.Votes = new HashSet<Vote>();
            this.Results = new HashSet<Result>();
    }
        public virtual ICollection<Quiz> Quizzes { get; set; }
        public virtual ICollection<Vote> Votes { get; set; }

        public virtual ICollection<Result> Results { get; set; }
    }
}
