package luhn

import (
	"errors"
	"regexp"
	"slices"
	"strconv"
	"strings"
)

func Valid(id string) bool {
	sequence, err := checkAndTrim(id)

	if err != nil {
		return false
	}

	splittedSequence := strings.Split(sequence, "")
	slices.Reverse(splittedSequence)
	sumAll := 0

	for i := 0; i < len(splittedSequence); i++ {
		num, _ := strconv.Atoi(splittedSequence[i])

		if i%2 != 0 {
			num *= 2
			if num >= 10 {
				num -= 9
			}
		}

		sumAll += num
	}

	return sumAll%10 == 0
}

func checkAndTrim(id string) (string, error) {
	idTrimmed := strings.ReplaceAll(id, " ", "")

	if len(idTrimmed) <= 1 {
		return "", errors.New("less than 2 digits")
	}

	matched, _ := regexp.MatchString(`^\d+$`, idTrimmed)
	if !matched {
		return "", errors.New("invalid number")
	}

	return idTrimmed, nil
}
