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
        }
    }
}
