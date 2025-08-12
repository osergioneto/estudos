package main

import "fmt"

func main() {
	var s string
	var shift int
	fmt.Scan(&s, &shift)

	for _, ch := range s {
		fmt.Print(string(int(ch) + shift)) // add the shift value to the character value
	}

	fmt.Println(uint16("403"))
	fmt.Println(bool("yes"))
	fmt.Println(int(501))
	fmt.Println(uint16("403"))
	fmt.Println(float32(404))
	fmt.Println(float(505))
}
