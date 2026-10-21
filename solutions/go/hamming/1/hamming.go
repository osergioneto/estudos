package hamming

import (
	"errors"
	"strings"
)

func Distance(a, b string) (int, error) {
	sliceA := strings.Split(a, "")
	sliceB := strings.Split(b, "")
	hammingDistance := 0

	if len(sliceA) != len(sliceB) {
		return 0, errors.New("tamanhos diferentes")
	}

	for i := range sliceA {
		if sliceA[i] != sliceB[i] {
			hammingDistance++
		}
	}

	return hammingDistance, nil
}
