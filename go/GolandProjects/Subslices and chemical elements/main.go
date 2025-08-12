package main

import "fmt"

func main() {
	elements := []string{"Helium", "Boron", "Neon", "Calcium", "Iodine"}

	elem1 := elements[0][0:2] // abbreviation of Helium
	elem2 := elements[1][0:1] // abbreviation of Boron
	elem3 := elements[2][0:2] // abbreviation of Neon
	elem4 := elements[3][0:2] // abbreviation of Calcium
	elem5 := elements[4][0:1] // abbreviation of Iodine

	// DO NOT delete the line below; it prints the substrings!
	fmt.Println(elem1, elem2, elem3, elem4, elem5)
}
