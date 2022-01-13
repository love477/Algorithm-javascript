package main

import (
	"fmt"

	"github.com/love477/algorithm/cmd/leetcode"
)

func main() {
	nums := []int{-1, 0, 1, 2, -4, -1}
	res := leetcode.ThreeSum(nums)
	fmt.Println(res)
}
