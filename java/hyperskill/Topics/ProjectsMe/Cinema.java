import java.util.Scanner;

public class Cinema {
    public static void main(String[] args) {
        int purchasedTickets = 0;
        int currentIncome = 0;
        int totalIncome = 0;

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
                    int ticketCost = buyTicket(scanner, rows, seats, room);
                    currentIncome += ticketCost;
                    purchasedTickets++;
                    break;
                case 3:
                    printStatistics(purchasedTickets, room, currentIncome);
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
        System.out.println("3. Statistics");
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

    private static int[] pickTicket(Scanner scanner, int rows, int seats, int[][] room) {
        boolean invalidTicket = true;
        boolean validInput = false;
        boolean notPurchased = false;
        int[] ticket = null;

        while (invalidTicket) {
            System.out.print("Enter a row number: \n> ");
            int ticketRow = scanner.nextInt() - 1;
            System.out.print("Enter a seat number in that row: \n> ");
            int ticketSeat = scanner.nextInt() - 1;
            System.out.println();

            if ((ticketRow > room.length - 1 || ticketRow < 0) || (ticketSeat > room[0].length - 1 || ticketSeat < 0)) {
                System.out.println("Wrong input!");
            } else if (room[ticketRow][ticketSeat] == 1) {
                System.out.println("That ticket has already been purchased!");
            } else {
                validInput = true;
                notPurchased = true;
            }

            if (validInput && notPurchased) {
                ticket = new int[]{ ticketRow, ticketSeat };
                invalidTicket = false;
            }
        }

        return ticket;
    }

    private static int buyTicket(Scanner scanner, int rows, int seats, int[][] room) {
        int[] ticket = pickTicket(scanner, rows, seats, room);

        int ticketCost = ticketCost(rows, seats, ticket[0]);

        room[ticket[0]][ticket[1]] = 1;
        System.out.printf("Ticket price: $%d %n", ticketCost);

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

    private static int totalIncome(int rows, int seats) {
        int totalIncome = 0;

        if (rows * seats < 60) {
            totalIncome = 10 * rows * seats;
        } else {
            int frontRows = rows / 2;
            int backRows = (rows + 1) / 2;
            totalIncome = (frontRows * seats * 10) + (backRows * seats * 8);
        }

        return totalIncome;
    }

    private static void printStatistics(int purchasedTickets, int[][] room, int currentIncome) {
        System.out.printf("Number of purchased tickets: %d %n", purchasedTickets);
        System.out.printf("Percentage: %.2f%% %n", (purchasedTickets / (float) (room.length * room[0].length)) * 100f);
        System.out.printf("Current income: $%d %n", currentIncome);
        System.out.printf("Total income: $%d %n", totalIncome(room.length, room[0].length));
    }
}