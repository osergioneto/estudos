package main

import "fmt"

func main() {
	// Write your code here
	var number int
	fmt.Scan(&number)

	var result int = factorial(number)
	fmt.Print(result)
}

func factorial(number int) int {
	if number == 0 || number == 1 {
		return 1
	}
	return number * factorial(number-1)
}
