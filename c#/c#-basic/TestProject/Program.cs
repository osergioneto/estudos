using System.Data;
using System.Text.RegularExpressions;

string permission = "Manager";
string pattern = @"\b(Admin|Manager)\b";
int level = 55;

Match match = Regex.Match(permission, pattern);

string message = (match.Value, level) switch
{
    ("Admin", > 55) => "Welcome, Super Admin user.",
    ("Admin", <= 55) => "Welcome, Admin user.",
    ("Manager", >= 20) => "Contact an Admin for access.",
    ("Manager", <= 20) => "You do not have sufficient privileges.",
    _ => "You do not have sufficient privileges."
};

Console.WriteLine(message);