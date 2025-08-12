package main

import "fmt"

// nolint:gomnd // DO NOT delete this comment!
func main() {
	var score int
	fmt.Scanf("%d", &score)

	// Write the code required to validate the student's score here.
	if score >= 71 {
		fmt.Print("Passed!")
	} else {
		fmt.Print("Failed!")
	}
}
