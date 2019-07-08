using System;
using System.Collections.Generic;
using System.Text;

namespace HelloCSharp
{
    public class Pizza
    {
        // Vinicio - this is the constructor
        // Vinicio - general style - start with your public variables
        public Pizza(decimal price, string type, string size)
        {
            this.price = price;
            this.type = type;
            this.size = size;
        }

        //public Pizza(decimal price)
        //{
        //    this.price = price;
        //    this.type = "Default";
        //}


        static public bool AreYouYummy()
        {
            return true;
        }


        // Vinicio - this is specific to A singular PIZZA
        public void Print()
        {
            Console.WriteLine($"This is a {this.size} pizza. It's ${this.price}, and it's {this.type}");
        }

        public void Prepare(int testNumber, params int[] arguments)
        {
        }

        void Bake()
        {

        }

        void Deliver()
        {

        }

        // Vinicio - in C# everything is private by default
        // Vinicio - in C#, variables are never public
        private decimal price;
        private string type;
        private string size;
    }
}
