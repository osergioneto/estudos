package isbnverifier

import (
    "strings"
    "slices"
    "strconv"
)

func IsValidISBN(isbn string) bool {
	isbnWithoutHyphen := strings.ReplaceAll(isbn, "-", "")
    spllited := strings.Split(isbnWithoutHyphen, "")
    slices.Reverse(spllited)
	sumAll := 0

    if len(spllited) != 10  {
        return false
    }
    
    for i := len(spllited) - 1; i >= 0 ; i-- {
        if spllited[0] == "X" {
            spllited[0] = "10"
        }
        
        intISBN, err := strconv.Atoi(spllited[i])
        if err != nil {
            return false
        }
            
        sumAll += intISBN * (i + 1)
    }

    return sumAll % 11 == 0
}
