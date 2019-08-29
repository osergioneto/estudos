using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TYpeConversion
{
    class Program
    {
        static void Main(string[] args)
        {
            byte b1 = 1;
            int i1 = b1;
            Console.WriteLine("byte: {0}", i1);

            int i2 = 1;
            byte b2 = (byte)i2;
            Console.WriteLine("int: {0}", b2);

            int i3 = 1000;
            byte b3 = (byte) i3;
            Console.WriteLine("int: {0}", b3);

            try
            {
                string number = "1234";
                byte b = Convert.ToByte(number);
                Console.WriteLine(b);
            }
            catch (Exception)
            {
                Console.WriteLine("The number could not be converted to byte");
            }

            try
            {
                string trueText = "true";
                bool boolean = Convert.ToBoolean(trueText);
                Console.WriteLine(boolean);
            }
            catch (Exception)
            {
                Console.WriteLine("The text could not be converted to boolean");
            }


        }
    }
}
