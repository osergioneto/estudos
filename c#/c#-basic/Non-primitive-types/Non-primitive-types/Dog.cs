using System;


namespace Non_primitive_types
{
    partial class Program
    {
        public class Dog
        {
            private string Name;
            private int Age;
            private string Color;

            public Dog(string name)
            {
                this.Name = name;
                this.Age = 1;
                this.Color = "Black";
            }

            public void Profile()
            {
                Console.WriteLine("The dog name is {0}. \n Has the age of {1}. \n His color is {2}", this.getName(), this.getAge(), this.getColor());
            }


            public static void Talk()
            {
                Console.WriteLine("It's a dog. It can't talk, only bark.");
            }

            public string getName()
            {
                return this.Name;
            }

            public void setName(string name)
            {
                this.Name = name;
            }

            public int getAge()
            {
                return this.Age;
            }

            public void setAge(int age)
            {
                this.Age = age;
            }

            public string getColor()
            {
                return this.Color;
            }

            public void setColor(string color)
            {
                this.Color = color;
            }
        }
    }
}
