import java.util.Scanner;
import java.util.Arrays;

class Main {
    // implement me
    private static void rotate(int[] arr, int steps) {
        int reducedSteps = reduceSteps(steps, arr.length);
        int[] newArr = arr.clone();

        for (int i = 0; i < arr.length; i++) {
            if ((i + reducedSteps) <= arr.length - 1) {
                arr[i + reducedSteps] = newArr[i];
            } else {
                arr[(i + reducedSteps) - arr.length] = newArr[i];
            }
        }
    }

    private static int reduceSteps(int steps, int arraySize) {
        if (steps <= (arraySize - 1)) {
            return steps;
        }

        return reduceSteps((steps % arraySize), arraySize);
    }

    // do not change code below
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] arr = Arrays.stream(scanner.nextLine().split(" "))
                .mapToInt(Integer::parseInt)
                .toArray();

        int steps = Integer.parseInt(scanner.nextLine());

        rotate(arr, steps);

        for (int i : arr) {
            System.out.print(i + " ");
        }
    }
}