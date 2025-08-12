package main

import "fmt"

// nolint: gomnd // DO NOT remove this comment!
func main() {
	// Use the `make` function to create `mySlice` with len=8 and cap=12 below:
	mySlice := make([]int, 8, 12)

	fmt.Println(checkSlice(mySlice)) // DO NOT delete this line! it checks the slice len and cap.
}
