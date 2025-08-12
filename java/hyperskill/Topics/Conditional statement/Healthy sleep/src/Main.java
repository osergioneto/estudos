import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int a = scanner.nextInt();
        int b = scanner.nextInt();
        int h = scanner.nextInt();

        String message;
        if (h < a) {
            message = "Deficiency";
        } else if (h > b) {
            message = "Excess";
        } else {
            message = "Normal";
        }

        System.out.println(message);
    }
}