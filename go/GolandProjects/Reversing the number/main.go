package main

import "fmt"

func main() {
	var number int
	var reversedNumber string
	fmt.Scan(&number)

	for number > 10 {
		lastDigit := number % 10
		reversedNumber = reversedNumber + fmt.Sprintf("%d", lastDigit)
		number = number / 10
	}

	reversedNumber = reversedNumber + fmt.Sprintf("%d", number)

	fmt.Println(reversedNumber)
}
