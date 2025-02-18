package main

import "fmt"

func main() {
	steps := 0
	num := 14
	for num > 0 {
		if num%2 == 0 {
			num /= 2
		} else {
			num -= 1
		}
		steps++
	}

	fmt.Println(steps)
}
