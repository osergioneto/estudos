package main

import (
	"fmt"
	"log"
	"os"
	"strings"
)

type deck []string

func newDeck() deck {
	cards := deck{}

	cardSuits := []string{"Spades", "Diamonds", "Hearts", "Clubs"}
	cardValues := []string{"Ace", "Two", "Three", "Four"}

	for _, suit := range cardSuits {
		for _, value := range cardValues {
			cards = append(cards, value+" of "+suit)
		}
	}

	return cards
}

func (d deck) print() {
	for i, card := range d {
		fmt.Println(i, card)
	}
}

func deal(d deck, size int) (deck, deck) {
	return d[:size], d[size:]
}

func (d deck) toString() string {
	strSlice := []string(d)

	return strings.Join(strSlice, ", ")
}

func (d deck) saveToFile(filename string) {
	os.WriteFile(filename, []byte(d.toString()), 0666)
}

func newDeckFromFile(filename string) deck {
	file, err := os.ReadFile(filename)

	if err != nil {
		log.Fatal(err)
	}

	return deck{string(file)}
}
