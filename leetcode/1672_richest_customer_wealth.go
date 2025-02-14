package main

import "fmt"

func main() {
	accounts := [][]int{{1, 2, 3}, {3, 2, 1}}
	richest := 0

	for i := 0; i < len(accounts); i++ {
		sum := 0
		for j := 0; j < len(accounts[i]); j++ {
			sum += accounts[i][j]
		}
		if sum > richest {
			richest = sum
		}
	}

	fmt.Println(richest)
}
