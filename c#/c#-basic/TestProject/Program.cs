Random dice = new Random();
int number = dice.Next(1, 3);
string coin = number == 1 ? "heads" : "tails";
Console.WriteLine(coin);