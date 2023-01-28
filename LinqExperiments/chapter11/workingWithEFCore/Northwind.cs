using Microsoft.EntityFrameworkCore;

namespace MyPack.Shared
{
    //NOTE Northwind is extracted from DbContext and must contain atleast 1 DbSet <T> 
    // it also contains overridden method OnModelCreating  
public class Northwind : DbContext   
    {
        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }

        protected override void OnConfiguring (DbContextOptionsBuilder optionsBuilder)
        {
            string path = System.IO.Path.Combine(System.Environment.CurrentDirectory, "Northwind.db");
            optionsBuilder.UseSqlite($"Filename ={path}");
            
        }
        protected override void OnModelCreating (ModelBuilder modelBulider)
        {
            modelBulider.Entity<Category>()
            
            .Property(category => category.CategoryName)
            .IsRequired() // NotNull
            .HasMaxLength(15);

            modelBulider.Entity<Product>().Property(product => product.Cost).HasConversion<double>();
            modelBulider.Entity<Product>().Property(product => product.ProductName).IsRequired().HasMaxLength(40);

        }
    }
}