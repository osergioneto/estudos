package main

import "fmt"

func main() {
	var input int

	fmt.Scan(&input)

	if (input%4 == 0 && input%100 != 0) || (input%400 == 0) {
		fmt.Print("Leap year")
	} else {
		fmt.Print("Regular year")
	}
}
