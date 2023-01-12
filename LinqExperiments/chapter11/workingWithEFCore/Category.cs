using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace MyPack.Shared
{
    public class Category
    {
        public int CategoryID { get; set; }
        public string CategoryName { get; set; }
        
        [Column(TypeName = "ntext")]
        public string Description { get; set; }

        public virtual ICollection<Product> Products { get; set; }
        public Category()
        {
            this.Products = new HashSet<Product>();

        }
    }
}
