using System;
using System.Collections.Generic;
using System.Text;

namespace HelloCSharp
{
    // July 29
    public class FrozenPizza : Pizza
    {
        public FrozenPizza(decimal price, string size): base(price, "Frozen", size)
        {

        }
    }
}
