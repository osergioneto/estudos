package main

import "fmt"

func main() {
	nums := []int{1, 2, 3, 4}

	result := make([]int, len(nums))
	result[0] = nums[0]

	for i := 1; i < len(nums); i++ {
		result[i] = nums[i] + result[i-1]
	}

	fmt.Print(result)
}
