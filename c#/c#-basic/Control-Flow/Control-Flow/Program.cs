﻿using System;

namespace Control_Flow
{

  
  class Program
  {
    static void Main(string[] args)
    {
      int hour = 10;

      if( hour > 0 && hour < 12 )
        Console.WriteLine("It's morning");
      else if(hour > 12 && hour < 18)
        Console.WriteLine("It's afternoon");
      else
        Console.WriteLine("It's evening");

      bool isGoldCostumer = true;

      float price = (isGoldCostumer) ? 19.95f : 29.95f;

      Console.WriteLine(price);
    }
  }
}
