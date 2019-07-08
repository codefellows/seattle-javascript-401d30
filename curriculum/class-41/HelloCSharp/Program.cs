using System;

namespace HelloCSharp
{
    class Program
    {
        static void Main(string[] args)
        {
            // Vinicio - myPizza is an object. An object is an instance of a class
            Pizza anotherPizza = new Pizza(15.99M,"Fancy","XL");
            FrozenPizza frozenPizza = new FrozenPizza(7.99M, "L");

            CanIHasPizza(anotherPizza);
            CanIHasPizza(frozenPizza);
        }


        // July 13th
        // Vinicio - this code is 100% open to extension, but closed to modification
        static void CanIHasPizza(Pizza myPizza)
        {
            Console.WriteLine("I have A PIZZAAAAAAAAAAAAAAAAA!");
        }
    }
}
