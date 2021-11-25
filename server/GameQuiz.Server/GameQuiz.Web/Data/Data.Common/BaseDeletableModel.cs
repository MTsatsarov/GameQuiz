using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GameQuiz.Web.Data.Data.Common
{
    public abstract class BaseDeletableModel<TKey> : BaseModel<TKey>, IDeletableEntity
    {
        public bool IsDeleted { get; set; }

        public DateTime? DeletedOn { get; set; }
    }
}
