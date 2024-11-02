import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class Test {
    public List<String> fizzBuzz(int n) {
        List<String> list = new java.util.ArrayList<>(List.of());

        for (int i = 1; i <= n; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                list.add("FizzBuzz");
            } else if (i % 3 == 0) {
                list.add("Fizz");
            } else if (i % 5 == 0) {
                list.add("Buzz");
            } else {
                list.add(Integer.toString(i));
            }
        }

        return list;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();

        Test test = new Test();
        List<String> result = test.fizzBuzz(n);

        System.out.println(Arrays.toString(result.toArray()));
    }
}
