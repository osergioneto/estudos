package main

import "fmt"

func main() {
	var number int
	fmt.Scan(&number)

	switch {
	case number > 0:
		fmt.Print("Positive!")
	case number < 0:
		fmt.Print("Negative!")
	default:
		fmt.Print("Zero!")
	}
}
