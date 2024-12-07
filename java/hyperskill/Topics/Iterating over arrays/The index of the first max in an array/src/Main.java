import java.util.Arrays;
import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int[] arr = new int[n];

        int highestIndex = 0;
        for (int i = 0; i < n; i++) {
            arr[i] = scanner.nextInt();

            if (arr[highestIndex] < arr[i]) {
                highestIndex = i;
            }
        }

        System.out.println(highestIndex);
    }
}