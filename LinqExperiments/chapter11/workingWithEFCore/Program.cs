// NOTE: the program is written as directed in the instructions from MJPrice's ch 11 , the exact code with comments can be found in the repo copied to github.
using MyPack.Shared;
using static System.Console;
using System.Collections.Generic;
using System.Linq;

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage;

using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace workingWithEFCore
{
    class Program
    {
        static void QueryingCategories()
        {
            
            using ( var db = new Northwind())
            {
                WriteLine ("Categories and how many products they have: ");
                IQueryable<Category> cats = db.Categories.Include(c => c.Products);
                foreach ( Category c in cats)
                {
                    WriteLine($"{c.CategoryName} has {c.Products.Count} products.");

                }
            }

        }
        
        static void FilterIncludes()
        {
            using ( var db = new Northwind())
            {
                Write("Enter a minimum units of the stock : ");
                string unitsInStock = ReadLine();
                int stock = int.Parse(unitsInStock);

                IQueryable<Category> cats = db.Categories.Include(c => c.Products.Where(p => p.Stock >= stock));

                WriteLine($"ToQueryString: {cats.ToQueryString()}");  // writes the respective SQL.
                
                foreach( Category c in cats)
                {
                    WriteLine($"{c.CategoryName} has {c.Products.Count} products with a minimum of {stock} units in Stock.");
                    foreach(Product p in c.Products)
                    {
                        WriteLine($"{p.ProductName} has {p.Stock} units in the stock");

                    }
                }
            }
        }


         static void Main ( string [] args)
        {
            QueryingCategories();
            FilterIncludes();

        }
    }
}
