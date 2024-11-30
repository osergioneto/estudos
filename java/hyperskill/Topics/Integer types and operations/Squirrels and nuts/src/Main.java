import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int num1 = scanner.nextInt();
        int num2 = scanner.nextInt();
        
        int remainder = num2 % num1;
        
        System.out.println(remainder);
        // put your code here
    }
}