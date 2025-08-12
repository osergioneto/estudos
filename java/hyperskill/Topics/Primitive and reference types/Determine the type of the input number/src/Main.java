import java.util.Scanner;
import static java.lang.Integer.parseInt;

public class Main {
    public static void main(String[] args) {
        // Create a Scanner object
        Scanner sc = new Scanner(System.in);

        String message = "non-integer";
        // Place your code here
        if (sc.hasNextInt()) {
            int num = sc.nextInt();
            message = num > 0 ? "positive"
                    : num < 0 ? "negative" : "zero";
        }

        System.out.println(message);
        sc.close();
    }
}