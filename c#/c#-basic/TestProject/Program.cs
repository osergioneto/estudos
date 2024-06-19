
/*
The high-level purpose of this code is to reverse a string 
and count the number of times a particular character appears.
*/
string originalMessage = "The quick brown fox jumps over the lazy dog.";

char[] message = originalMessage.ToCharArray();
Array.Reverse(message);

int letterCount = 0;

foreach (char letter in message)
{
    if (letter == 'o')
    {
        letterCount++;
    }
}

string reversedMessage = new String(message);

Console.WriteLine(reversedMessage);
Console.WriteLine($"'o' appears {letterCount} times.");