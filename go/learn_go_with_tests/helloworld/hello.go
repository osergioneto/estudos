package main

import (
	"fmt"
)

func Hello(name, language string) string {
	if name == "" {
		name = "World"
	}

	return getPrefix(language) + name
}

func getPrefix(language string) string {
	switch language {
	case "Spanish":
		return "Hola, "
	case "French":
		return "Bonjour, "
	default:
		return "Hello, "
	}
}

func main() {
	fmt.Println(Hello("world", "Spanish"))
}
