package main

import (
	"sort"
	"strings"
)

func main() {
	canConstruct("aa", "aab")
}

func canConstruct(ransomNote string, magazine string) bool {
	ransomNoteRunes := []rune(ransomNote)
	magazineRunes := []rune(magazine)

	sort.Slice(ransomNoteRunes, func(i, j int) bool { return ransomNoteRunes[i] < ransomNoteRunes[j] })
	sort.Slice(magazineRunes, func(i, j int) bool { return magazineRunes[i] < magazineRunes[j] })

	ransomNote = string(ransomNoteRunes)
	magazine = string(magazineRunes)

	for _, char := range magazine {
		cuttedString, _ := strings.CutPrefix(ransomNote, string(char))
		ransomNote = cuttedString
	}

	return ransomNote == ""
}
