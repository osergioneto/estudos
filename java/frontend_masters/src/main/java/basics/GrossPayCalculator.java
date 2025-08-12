package basics;

import java.util.Scanner;

public class GrossPayCalculator {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("How many hours did you work?");
        int hours = scanner.nextInt();

        System.out.println("How is your hourly pay rate?");
        double rate = scanner.nextDouble();

        scanner.close();

        double payRate = hours * rate;

        System.out.println("Gross Pay: " + payRate);
    }
}
