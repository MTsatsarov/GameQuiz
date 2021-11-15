using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GameQuiz.Web.Data.Models
{
    public class Vote
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Range(1,5)]
        public int Grade { get; set; }
        [Required]
        public string QuizId { get; set; }
        public Quiz Quiz { get; set; }
    }
}
