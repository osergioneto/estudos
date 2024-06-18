Random random = new Random();
int daysUntilExpiration = random.Next(12);
// int discountPercentage = 0;
Console.WriteLine($"daysUntilExpiration: {daysUntilExpiration}");
string message = daysUntilExpiration switch
{
    0 => "Your subscription has expired.",
    1 => $"Your subscription expires within a day!\n Renew now and save 20%!",
    < 5 => $"Your subscription expires in {daysUntilExpiration} days. \nRenew now and save 10%!",
    < 10 => "Your subscription will expire soon. Renew now!",
    _ => ""
};

Console.WriteLine(message);