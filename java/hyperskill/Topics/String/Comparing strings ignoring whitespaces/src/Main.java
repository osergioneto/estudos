import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String str1 = scanner.nextLine().trim().replaceAll(" ", "");
        String str2 = scanner.nextLine().trim().replaceAll(" ", "");

        System.out.println(str1.equalsIgnoreCase(str2));
    }
}