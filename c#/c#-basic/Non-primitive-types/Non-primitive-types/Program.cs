using System;
using Non_primitive_types.Math;


namespace Non_primitive_types
{
    partial class Program
    {

        public enum ShippingMethod
        {
            RegularAirMail = 1,
            RegistredAirMail = 2,
            Express = 3
        }

        static void Main(string[] args)
        {
            var gaia = new Dog("Gaia");
            var diana = new Dog("Diana");

            gaia.Profile();
            Dog.Talk();

            System.Console.WriteLine(Calculator.Add(gaia.getAge(), diana.getAge()));

            // Arrays

            var numbers = new int[3];
            numbers[0] = 1;

            System.Console.WriteLine(numbers[0]);
            System.Console.WriteLine(numbers[1]);
            System.Console.WriteLine(numbers[2]);

            var names = new string[3] { "Arya", "Gaia", "Diana" };

            System.Console.WriteLine(names[0]);
            System.Console.WriteLine(names[1]);
            System.Console.WriteLine(names[2]);

            // Strings

            string firstName = "Sérgio";
            string lastName = "Neto";

            string fullName = firstName + " " + lastName;

            string myFullName = string.Format("My name is {0} {1}", firstName, lastName);

            var randomNames = new string[3] { "Jack", "John", "Mary" };
            var formatedNames = string.Join(", ", randomNames);

            var text = @"Hi John,
Look into the following paths
c:\folder1\folder2
c:\folder3\folder4";

            System.Console.WriteLine(fullName);
            System.Console.WriteLine(myFullName);
            System.Console.WriteLine(formatedNames);
            System.Console.WriteLine(text);

            // Enums
            var method = ShippingMethod.Express;
            System.Console.WriteLine((int)method);

            var methodId = 3;
            System.Console.WriteLine((ShippingMethod)methodId);

            System.Console.WriteLine(method.ToString());

            var methodName = "Express";
            var shippingMethod = (ShippingMethod)Enum.Parse(typeof (ShippingMethod), methodName);

            Console.WriteLine(shippingMethod);

            // Value Types vs Reference Types
            var a = 10;
            var b = a;
            b++;
            Console.WriteLine(string.Format("a: {0}, b: {1}", a, b));

            var array1 = new int[3] { 1, 2, 3 };
            var array2 = array1;
            array2[0] = 0;
            Console.WriteLine(string.Format("array 1: {0}, array 2: {1}", array1[0], array2[0]));
        }
    }
}
