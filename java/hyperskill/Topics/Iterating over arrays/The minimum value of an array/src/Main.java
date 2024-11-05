import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int[] array = new int[n];

        int lowest = Integer.MAX_VALUE;
        for (int i = 0; i < n; i++) {
            array[i] = scanner.nextInt();

            if (lowest > array[i]) {
                lowest = array[i];
            }
        }

        System.out.println(lowest);
    }
}