import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int num = scanner.nextInt();

        // function calls of isDivByThree, isDivByFive, isDivByThreeAndFive will be here
        if (isDivByThreeAndFive(num)) {
            System.out.println("FizzBuzz");
        } else if (isDivByFive(num)) {
            System.out.println("Buzz");
        } else if (isDivByThree(num)) {
            System.out.println("Fizz");
        } else {
            System.out.println("None");
        }
    }
    // function isDivByThree will be here
    public static Boolean isDivByThree(int number) {
        return number % 3 == 0;
    }

    // function isDivByFive will be here
    public static Boolean isDivByFive(int number) {
        return number % 5 == 0;
    }

    // function isDivByThreeAndFive will be here
    public static Boolean isDivByThreeAndFive(int number) {
        return (number % 3 == 0) && (number % 5 == 0);
    }
}