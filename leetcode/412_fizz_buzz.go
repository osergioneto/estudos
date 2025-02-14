package main

import (
	"fmt"
	"strconv"
)

func main() {
	n := 3
	answer := make([]string, n)

	for i := 0; i < n; i++ {
		number := i + 1
		if number%3 == 0 && number%5 == 0 {
			answer[i] = "FizzBuzz"
		} else if number%3 == 0 {
			answer[i] = "Fizz"
		} else if number%5 == 0 {
			answer[i] = "Buzz"
		} else {
			answer[i] = strconv.FormatInt(int64(number), 10)
		}
	}

	fmt.Println(answer)
}
