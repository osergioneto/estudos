import java.util.Scanner;

public class MainV3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the number of rows: \n> ");
        int rows = scanner.nextInt();

        System.out.print("Enter the number of seats in each row: \n> ");
        int seats = scanner.nextInt();

        int[][] room = new int[rows][seats];

        int menuOption = showMenu(scanner);

        while (menuOption != 0) {
            switch (menuOption) {
                case 1:
                    printCinema(room);
                    break;
                case 2:
                    buyTicket(scanner, rows, seats, room);
                    break;
                default:
                    break;
            }
            menuOption = showMenu(scanner);
        }
    }

    private static int showMenu(Scanner scanner) {
        System.out.println("\n1. Show the seats");
        System.out.println("2. Buy a ticket");
        System.out.print("0. Exit \n> ");

        int option = scanner.nextInt();

        System.out.println();

        return option;
    }

    private static void printCinema(int[][] room) {
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
                    String message = room[0][0] == 1 ? ((i+1) + " B") : ((i+1) + " S");
                    System.out.print(message);
                } else {
                    String message = room[i][j] == 1 ? " B" : " S";
                    System.out.print(message);
                }
            }
            System.out.println();
        }
    }

    private static int buyTicket(Scanner scanner, int rows, int seats, int[][] room) {
        System.out.print("Enter a row number: \n> ");
        int ticketRow = scanner.nextInt() - 1;
        System.out.print("Enter a seat number in that row: \n> ");
        int ticketSeat = scanner.nextInt() - 1;
        System.out.println();

        int ticketCost = ticketCost(rows, seats, ticketRow);
        room[ticketRow][ticketSeat] = 1;
        System.out.println("Ticket price: ");
        System.out.println("$" + ticketCost);

        return ticketCost;
    }

    private static int ticketCost(int rows, int seats, int ticketRow) {
        if (rows * seats < 60) {
            return 10;
        } else {
            int frontHalf = rows / 2;

            return ticketRow < frontHalf ? 10 : 8 ;
        }
    }
}
