using System;

namespace Variables
{
    class Program
    {
        static void Main(string[] args)
        {
            byte numero = 2;
            int inteiro = 230;
            float pontoFlutuante = 123.456f;
            bool boolean = false;
            char character = 'A';
            string primeiroNome = "Sérgio";

            Console.WriteLine("byte: {0}", numero);
            Console.WriteLine("int: {0}", inteiro);
            Console.WriteLine("float: {0}", pontoFlutuante);
            Console.WriteLine("bool: {0}", boolean);
            Console.WriteLine("char: {0}", character);
            Console.WriteLine("string: {0}", primeiroNome);

            const float Pi = 3.14f;
            Console.WriteLine("Pi is {0}", Pi);

            Console.WriteLine("Min and Max - Bool: {0} {1}", byte.MinValue, byte.MaxValue);
        }
    }
}
