import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String str = scanner.nextLine();
        int start = scanner.nextInt();
        int end = scanner.nextInt() + 1;

        System.out.println(str.substring(start, end));
    }
}