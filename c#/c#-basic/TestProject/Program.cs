// initialize variables - graded assignments 
int currentAssignments = 5;

int[] sophiaGrades = { 90, 86, 87, 98, 100 };
int[] andrewGrades = { 92, 89, 81, 96, 90 };
int[] emmaGrades = { 90, 85, 87, 98, 68 };
int[] loganGrades = { 90, 95, 87, 88, 96 };

int sophiaSum = sophiaGrades.Sum();
int andrewSum = andrewGrades.Sum();
int emmaSum = emmaGrades.Sum();
int loganSum = loganGrades.Sum();

decimal sophiaScore = (decimal)sophiaSum / currentAssignments;
decimal andrewScore = (decimal)andrewSum / currentAssignments;
decimal emmaScore = (decimal)emmaSum / currentAssignments;
decimal loganScore = (decimal)loganSum / currentAssignments;

Console.WriteLine("Student\t\tGrade\n");
Console.WriteLine("Sophia:\t\t" + sophiaScore + "\tA-");
Console.WriteLine("Andrew:\t\t" + andrewScore + "\tB+");
Console.WriteLine("Emma:\t\t" + emmaScore + "\tB");
Console.WriteLine("Logan:\t\t" + loganScore + "\tA-");

Console.WriteLine("Press the Enter key to continue");
Console.ReadLine();
