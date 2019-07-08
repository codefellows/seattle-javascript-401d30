using System;
using System.Collections.Generic;
using System.Text;

namespace HelloCSharp
{
    class BankAccount
    {
        public string MemberName;
        public string MemeberId;
        public void TransferFunds(decimal amountToTransfer)
        {
            // Vinicio - Here, I can check that I'm doing things the right way
        }

        private decimal Balance;
        private string MemberSSN;
    }
}
