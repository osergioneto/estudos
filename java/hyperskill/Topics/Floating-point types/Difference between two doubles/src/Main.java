import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double first = scanner.nextDouble();
        double second = scanner.nextDouble();

        double difference = second - first;

        System.out.printf("%.1f", difference);

        scanner.close();
    }
}