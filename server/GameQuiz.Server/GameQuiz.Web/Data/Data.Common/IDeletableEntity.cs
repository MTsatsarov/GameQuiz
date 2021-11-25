using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GameQuiz.Web.Data.Data.Common
{
    public interface IDeletableEntity
    {
        bool IsDeleted { get; set; }

        DateTime? DeletedOn { get; set; }
    }
}
