import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Creating an instance of Scanner class
        Scanner scanner = new Scanner(System.in);

        // Read the input string from the user
        String input = scanner.nextLine();

        // Initialize a new string to store the result
        String result = "";

//        System.out.println(Arrays.toString());
        String[] splittedInput = input.split("");
        // Your code here
        for (int i = 0; i < input.length(); i++) {
            result += splittedInput[i] + splittedInput[i];
        }

        // Print the result to the standard output
        System.out.println(result);
    }
}