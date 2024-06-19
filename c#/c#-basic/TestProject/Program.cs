int[] inventory = { 200, 450, 700, 175, 250 };
int total = 0;
int bin = 0;

foreach (int items in inventory)
{
    bin++;
    total += items;

    Console.WriteLine($"Bin {bin} = {items} items (Running total: {total})");
}

Console.WriteLine($"We have {total} items in inventory.");