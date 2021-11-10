

using Microsoft.EntityFrameworkCore;

namespace GameQuiz.Web.Data
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        { }


    }
}
