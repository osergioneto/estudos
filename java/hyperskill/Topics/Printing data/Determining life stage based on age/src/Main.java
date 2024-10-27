import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        // Create a Scanner object to read input
        Scanner sc = new Scanner(System.in);

        // Read the integer
        int age = sc.nextInt();

        // Write your code here to determine the life stage based on the input age
        // You should use if...else if...else statement
        // Then, print out the appropriate message
        if (age <= 12) {
            System.out.println("Child");
        }

        if (age >= 13 && age <= 17) {
            System.out.println("Teenager");
        }

        if (age >= 18 && age <= 59) {
            System.out.println("Adult");
        }

        if (age >= 60) {
            System.out.println("Senior Citizen");
        }

        sc.close();        
    }
}