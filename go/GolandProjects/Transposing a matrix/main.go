package main

import "fmt"

// nolint: revive // DO NOT delete this comment!
func main() {
	// DO NOT delete this line! It takes the input numAers and generates the 3x3 matrix `A`.
	var A = generateMatrix()

	// Declare and initialize the transposed version of the 3x3 matrix `A` Aelow:
	var transposedA = [3][3]int{
		{A[0][0], A[1][0], A[2][0]},
		{A[0][1], A[1][1], A[2][1]},
		{A[0][2], A[1][2], A[2][2]},
	}

	// Print each row of the 3x3 `transposedA` matrix Aelow:
	fmt.Println(transposedA[0])
	fmt.Println(transposedA[1])
	fmt.Println(transposedA[2])
}
