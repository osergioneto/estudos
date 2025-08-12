import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Read the number as a double.
        double num = scanner.nextDouble();

        // Convert and print the number to an integer.

        System.out.println((int) num);

        scanner.close();
    }
}