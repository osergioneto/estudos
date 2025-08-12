import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int highest = Integer.MIN_VALUE;
        int num = Integer.MIN_VALUE;
        do {
            num = scanner.nextInt();
            highest = num >  highest ? num : highest;
        } while(num != 0);

        System.out.println(highest);
    }
}
