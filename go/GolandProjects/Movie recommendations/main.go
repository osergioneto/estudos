package main

import "fmt"

func main() {
	var age int
	fmt.Scanf("%d", &age)

	// Code your switch or if...else-if statement here.
	switch {
	case age <= 14:
		fmt.Print("Toy Story 4")
	case age >= 15 && age <= 18:
		fmt.Print("The Matrix")
	case age >= 19 && age <= 25:
		fmt.Print("John Wick")
	case age >= 26 && age <= 34:
		fmt.Print("Constantine")
	default:
		fmt.Print("Speed")
	}
}
