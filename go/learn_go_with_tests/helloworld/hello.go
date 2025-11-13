package main

import (
	"fmt"
	"io"
	"log"
	"net/http"
)

func Hello(name, language string) string {
	if name == "" {
		name = "World"
	}

	return getPrefix(language) + name
}

func Greet(writer io.Writer, name string) {
	fmt.Fprintf(writer, "Hello, %s", name)
}

func MyGreeterHandler(w http.ResponseWriter, r *http.Request) {
	Greet(w, "world")
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
	// fmt.Println(Hello("world", "Spanish"))
	// Greet(os.Stdout, "Elodie")
	log.Fatal(http.ListenAndServe(":5001", http.HandlerFunc(MyGreeterHandler)))
}
