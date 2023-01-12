
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
        
         static void Main ( string [] args)
        {
            QueryingCategories();
        }
    }
}
