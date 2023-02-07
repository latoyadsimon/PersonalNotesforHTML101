// import java.util.Arrays;
// import java.util.stream.IntStream;

public class fizzbuzz {
    public static void main(String[] args) {

        iterateFizz(20);
        // fizzbuzzNum(15);
        // int[] wat = fizzbuzzNum(20);
        // System.out.println("This is the array again:");
        // System.out.println(Arrays.toString(wat));
    };

    // public static int[] fizzbuzzNum(int num) {
    // // int[] numArray;
    // int[] arr = IntStream.rangeClosed(1, num).toArray();

    // // System.out.println("This is the array");
    // // System.out.println(Arrays.toString(arr));
    // return arr;

    // }

    public static void iterateFizz(int num) {
        for (int i = 1; i <= num; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                System.out.println("FizzBuzz");
            } else if (i % 3 == 0) {
                System.out.println("Fizz");
            } else if (i % 5 == 0) {
                System.out.println("Buzz");
            } else {
                System.out.println(i);
            }

        }

    }

}

// pseudocode focus first, then try to code when done , take the whole hour

// --------------------------------------------------------------

// this is the fizzbuzz from the practice test
