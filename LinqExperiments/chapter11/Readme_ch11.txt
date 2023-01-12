This folder is created in for
MJPrice book - c# 9 Net 5, pg 365 implementation
in ref to: 
1. installing and  using SqLite 
2. creating Northwind database [1960] moderate type data.

Also check the new fork created from the mJPrice location: https://github.com/markjprice

Note: 
Added: Nuget package from : dotnet add package Microsoft.EntityFrameworkCore.Sqlite --version 7.0.2
reason : pg368 
hence, run command form  https://www.nuget.org/packages/Microsoft.EntityFrameworkCore.Sqlite/#usedby-body-tab

~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  COMMANDS: 
command: 
dotnet add package Microsoft.EntityFrameworkCore.Sqlite [pg 368]
dotnet add package Microsoft.EntityFrameworkCore.Design 

sqlite3 Northwind.db -init Northwind.sql  <<<< Populates the database form the sql file.

scaffolding: needs another folder so that new classes can be created and compared.
(for class creation from database tables) dotnet ef dbcontext scaffold "Filename=Northwind.db" Microsoft.EntityFrameworkCore.Sqlite --table Categories --table Products --output-dir AutoGenModels --namespace MyPack.Shared.AutoGenModels --data-annotations --context Northwind



install tool dotnet -ef (entity framework for cli ) command: 
dotnet tool install --global dotnet-ef

verify by the command : dotnet tool list --global
Uninstall : dotnet tool uninstall --global dotnet-ef
Update the tools: dotnet tool update
for more:  https://learn.microsoft.com/en-us/ef/core/get-started/overview/install


~~~~~~~~~~~~~~~~~~~~~~~~~~~~
continue to lambda, logging , and other operations till transaction and its properties. 
~~~~~~~~~~~~~~~~~~~~~~~~~~
