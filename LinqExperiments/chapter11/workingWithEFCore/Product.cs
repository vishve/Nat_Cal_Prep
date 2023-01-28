using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace MyPack.Shared
{
    public class Product
    {
        public int ProductID { get; set;  }
        //Following code can be used again if the database Northwind.cs file's method modelBulider for ProductName is removed.
        // [Required]
        // [StringLength(40)]
         public string ProductName { get; set;  }

        [Column ("UnitPrice", TypeName = "money")]
        public decimal? Cost { get; set; }  //property name != field name

        [Column ("UnitsInStock")]
        public short? Stock { get; set;  }
        public bool Discontinued { get; set; }
        
        //foreign key to category tables
        public int CategoryID { get; set; }
        public virtual Category Category { get; set; }
        
    }
}