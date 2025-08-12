import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int a = scanner.nextInt();
        int b = scanner.nextInt();

        int count = 0, sum = 0;

        for (int i = a; a <= b; a++) {
            if (a % 3 == 0) {
                count++;
                sum += a;
            }
        }

        System.out.println((float) sum / count);
    }
}