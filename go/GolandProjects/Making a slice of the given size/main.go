package main

import "fmt"

func main() {
	// DO NOT delete or modify the code block below!
	var y int
	fmt.Scanln(&y)

	// Make a slice of strings with the length 'y' below:
	s := make([]string, y)

	fmt.Println(len(s)) // print the 'len' of the slice here!
}
