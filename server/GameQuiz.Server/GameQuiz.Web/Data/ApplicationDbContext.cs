

using GameQuiz.Web.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace GameQuiz.Web.Data
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        { }

        public DbSet<Answer> Answers { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Quiz> Quizzes { get; set; }
        public DbSet<Vote> Votes { get; set; }

    }
}
