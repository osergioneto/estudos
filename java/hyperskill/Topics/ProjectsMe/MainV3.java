import java.util.Scanner;

public class MainV3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the number of rows: \n> ");
        int rows = scanner.nextInt();

        System.out.print("Enter the number of seats in each row: \n> ");
        int seats = scanner.nextInt();

        int[][] room = new int[rows][seats];

        System.out.println("Cinema:");
        for (int i = 0; i < room.length ; i++) {
            if (i != 0) System.out.print((i+1));
            for (int j = 0; j < room[i].length ; j++) {
                if (i == 0 && j == 0) {
                    System.out.print(" ");
                    for (int k = 0; k < room[i].length; k++) {
                        System.out.print(" " + (k+1));
                    }
                    System.out.print("\n");
                }
                if (i == 0 && j == 0) {
                    System.out.print((i+1) + " S");
                } else {
                    System.out.print(" S");
                }
            }
            System.out.println();
        }

//        int totalIncome = 0;
//
//        if (rows * seats < 60) {
//            totalIncome = rows * seats * 10;
//        } else {
//            int frontHalf = rows / 2;
//            int backHalf = rows % 2 == 0 ? rows / 2 : (rows / 2 + rows % 2);
//
//            System.out.println("frontHalf: " + frontHalf);
//            System.out.println("backHalf:  " + backHalf);
//
//            totalIncome = (frontHalf * seats * 10) + (backHalf * seats * 8);
//        }
//
//        System.out.print("Total income: \n$" + totalIncome);
    }

//    private int roomSize(int rows, int seats) {
//
//    }
//
//    private int ticketPrice(int row, int seat) {
//
//    }
}
