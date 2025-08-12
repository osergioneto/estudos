import java.util.Arrays;
import java.util.Collections;
import java.util.Scanner;


class ArrayOperations {
    public static void reverseElements(int[][] twoDimArray) {
        for (int i = 0; i < twoDimArray.length; i++) {
            for (int j = 0; j < twoDimArray[i].length / 2; j++) {
                int temp = twoDimArray[i][j];
                twoDimArray[i][j] = twoDimArray[i][twoDimArray[i].length - 1 -j];
                twoDimArray[i][twoDimArray[i].length - 1 -j] = temp;
            }
        }
    }

//    public static void main(String[] args) {
//        int[][] twoDimArray = {
//                {0, 0, 9, 9},
//                {1, 2, 3, 4},
//                {5, 6, 7, 8}
//        };
//        reverseElements(twoDimArray);
//    }
}