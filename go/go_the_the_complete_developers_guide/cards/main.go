package main

import "fmt"

func main() {
	cards := newDeck()

	hand, _ := deal(cards, 5)
	hand.saveToFile("deck.txt")

	deck := newDeckFromFile("deck-non.txt")
	fmt.Println("new deck: ", deck)
}
