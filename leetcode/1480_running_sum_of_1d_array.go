package main

import "fmt"

func main() {
	nums := []int{1, 2, 3, 4}

	result := make([]int, len(nums))
	for i := 0; i < len(nums); i++ {
		for j := 0; j < i+1; j++ {
			result[i] += nums[j]
		}
	}

	fmt.Print(result)
}
