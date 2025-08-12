package main

import (
	"fmt"
	"strconv"
)

func main() {
	n := 35
	answer := make([]string, n)

	for i := 0; i < n; i++ {
		number := i + 1
		divisibleBy3 := number%3 == 0
		divisibleBy5 := number%5 == 0
		divisibleBy7 := number%7 == 0

		if divisibleBy3 {
			answer[i] += "Fizz"
		}

		if divisibleBy5 {
			answer[i] += "Buzz"
		}

		if divisibleBy7 {
			answer[i] += "Jazz"
		}

		if answer[i] == "" {
			answer[i] = strconv.FormatInt(int64(number), 10)
		}
	}

	fmt.Println(answer)
}
