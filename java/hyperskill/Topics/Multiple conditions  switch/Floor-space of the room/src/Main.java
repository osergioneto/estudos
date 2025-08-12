import java.util.Scanner;

class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String shape = scanner.next();

        switch (shape) {
            case "rectangle":
                double width = scanner.nextDouble();
                double length = scanner.nextDouble();
                System.out.println((double) width * length);
                break;
            case "circle":
                double radius = scanner.nextDouble();
                System.out.println(radius * radius * 3.14);
                break;
            case "triangle":
                double a = scanner.nextDouble();
                double b = scanner.nextDouble();
                double c = scanner.nextDouble();
                double s = (a + b + c) / 2;
                System.out.println(Math.sqrt(s * (s - a) * (s - b) * (s - c)));
                break;
            default:
                System.out.println("not shape");
                break;
        }

        scanner.close();
    }
}