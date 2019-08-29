using System.Collections.Generic;
using Non_primitive_types.Math;

namespace Non_primitive_types
{
    partial class Program
    {
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
        }
    }
}
