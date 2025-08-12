import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int a = scanner.nextInt();
        int b = scanner.nextInt();
        int result = 1;

        for (; a < b; a++) {
            result *= a;
        }

        System.out.println(result);
    }
}