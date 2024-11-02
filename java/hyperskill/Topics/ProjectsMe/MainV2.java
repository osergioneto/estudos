import java.util.Scanner;

public class MainV2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the number of rows: \n> ");
        int rows = scanner.nextInt();

        System.out.print("Enter the number of seats in each row: \n> ");
        int seats = scanner.nextInt();

        int totalIncome = 0;

        if (rows * seats < 60) {
            totalIncome = rows * seats * 10;
        } else {
            int frontHalf = rows / 2;
            int backHalf = rows % 2 == 0 ? rows / 2 : (rows / 2 + rows % 2);

            System.out.println("frontHalf: " + frontHalf);
            System.out.println("backHalf:  " + backHalf);

            totalIncome = (frontHalf * seats * 10) + (backHalf * seats * 8);
        }

        System.out.print("Total income: \n$" + totalIncome);
    }
}
