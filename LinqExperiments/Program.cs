// // See https://aka.ms/new-console-template for more information
// Console.WriteLine("Hello, World!"); 
// Changes done as below and in the csproj file with <ImplicitUsings>disable</ImplicitUsings>
// brings me back to the pre .net 6 coding status, now I can include and exclude whatevver I want.


using System;

namespace LinqExperiments // Note: actual namespace depends on the project name.
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}