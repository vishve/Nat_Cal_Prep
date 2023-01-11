// // See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!"); 
// Changes done as below and in the csproj file with <ImplicitUsings>disable</ImplicitUsings>
// it brings me back to the pre .net 6 coding status, now I can include and exclude whatevver I want and here I start again.



// source : https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/how-to-split-a-file-into-many-files-by-using-groups-linq
// this file will produce many text files that are produced as a result, you have to delete them, 
//this is an experiment with linq GROUP feature 
//this uses 2 text files supplied datafile1.txt and datafile2.txt to be merged into 1 large file = mergedFilesWithNoDuplicates. this large file is then sliced into small files. 
// by python, I use pandas otherwise: https://youtu.be/P8dpG5arKY0
// using c# : https://www.c-sharpcorner.com/UploadFile/a72401/split-and-merge-files-in-C-Sharp/
// Read more. 

using System;
using System.IO;
using System.Linq;

namespace LinqExperiments // Note: actual namespace depends on the project name.
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            string fpath01 = @".\datafile1.txt";
            string fpath02 = @".\datafile2.txt";
            
            string[] fileA = System.IO.File.ReadAllLines(fpath01);
            string[] fileB = System.IO.File.ReadAllLines(fpath02);
            //Array.ForEach(fileA, Console.WriteLine);
            // testing the contents of the file being copied to array.
            Console.WriteLine( string.Join("\n", fileA));
            // Merging the files and removing the duplicates...
            var mergedFilesWithNoDuplicates = fileA.Union(fileB);
            // linq query no where used here
            var groupLinqQuery = from name in mergedFilesWithNoDuplicates
                             let n = name.Split(",")
                             group name by n[0][0] into g
                             orderby g.Key
                             select g;
            Console.WriteLine("\nSplitter file results :\n");
            foreach( var g in groupLinqQuery)
            {
                string newFileCreated = @".\dataCreated_Deleteonly\" + g.Key + ".txt";  // file manupulation string 
                Console.WriteLine(g.Key + "\t");
using (System.IO.StreamWriter sw = new System.IO.StreamWriter(newFileCreated)) // toughest line
                {
                    foreach (var item in g)
                    {
                        sw.WriteLine(item);
                        Console.WriteLine(" {0}", item);
                    }
                }
            }
        }
    }
}