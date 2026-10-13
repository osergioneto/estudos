package raindrops

import "strconv"

func Convert(number int) string {
	sound := ""
	isDivisbleBy3 := number % 3 == 0
	isDivisbleBy5 := number % 5 == 0
	isDivisbleBy7 := number % 7 == 0

	if isDivisbleBy3 {
		sound += "Pling"
	}
	if isDivisbleBy5 {
		sound += "Plang"
	}
	if isDivisbleBy7 {
		sound += "Plong"
	}

	if !isDivisbleBy3 && !isDivisbleBy5 && !isDivisbleBy7 {
		sound += strconv.Itoa(number)
	}

	return sound
}
