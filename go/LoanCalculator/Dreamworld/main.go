package main

import (
	"fmt"
	"math"
)

func main() {
	var loanPrincipal, monthlyPayment, numberOfMonths int
	var option string

	// Write your code solution for the project below.
	fmt.Println("Enter the loan principal:")
	fmt.Print("> ")
	fmt.Scan(&loanPrincipal)

	fmt.Println("What do you want to calculate?")
	fmt.Println("type \"m\" for number of monthly payments")
	fmt.Println("type \"p\" for the monthly payment:")
	fmt.Print("> ")
	fmt.Scan(&option)

	if option == "m" {
		fmt.Println("Enter the monthly payment:")
		fmt.Print("> ")
		fmt.Scan(&monthlyPayment)

		remainingMonths := math.Ceil(float64(loanPrincipal) / float64(monthlyPayment))
		if remainingMonths <= 1 {
			fmt.Println("It will take 1 month to repay the loan")
		} else {
			fmt.Printf("It will take %0.f months to repay the loan", remainingMonths)
		}
	} else {
		fmt.Println("Enter the number of months:")
		fmt.Print("> ")
		fmt.Scan(&numberOfMonths)

		evenDivision := (loanPrincipal % numberOfMonths) == 0
		payment := math.Ceil(float64(loanPrincipal) / float64(numberOfMonths))

		if evenDivision {
			fmt.Printf("Your monthly payment = %0.f", payment)
		} else {
			lastPayment := loanPrincipal - (numberOfMonths-1)*int(payment)
			fmt.Printf("Your monthly payment = %0.f and the last payment = %d.", payment, lastPayment)
		}
	}
}
