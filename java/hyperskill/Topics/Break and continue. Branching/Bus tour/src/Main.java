import java.util.Arrays;
import java.util.Scanner;
import java.util.stream.Stream;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int busHeight = scanner.nextInt();
        int bridgesCount = scanner.nextInt();

        for (int i = 1; i <= bridgesCount; i++) {
            int bridgeHeight = scanner.nextInt();
            if (bridgeHeight <= busHeight) {
                System.out.printf("Will crash on bridge %s%n", i);
                break;
            }

            if (i == bridgesCount) {
                System.out.println("Will not crash");
            }
        }
    }
}