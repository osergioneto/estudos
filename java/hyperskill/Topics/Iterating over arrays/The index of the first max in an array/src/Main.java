import java.util.Arrays;
import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int[] arr = new int[n];

        int highestVal = Integer.MIN_VALUE;
        int highestIndex = 0;
        for (int i = 0; i < n; i++) {
            arr[i] = scanner.nextInt();

            if (highestVal < arr[i]) {
                highestVal = arr[i];
                highestIndex = i;
            }
        }

        System.out.println(highestIndex);
    }
}