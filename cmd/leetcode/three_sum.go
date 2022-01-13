package leetcode

import (
	"encoding/json"
	"sort"
)

// ThreeSum 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
// 使得 a + b + c = 0, 请你找出所有和为 0 且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。
func ThreeSum(nums []int) [][]int {
	res := make([][]int, 0)
	sort.Ints(nums)
	exist := make(map[string]bool)
	for i := 0; i < len(nums); i++ {
		d := -nums[i]
		k := len(nums) - 1
		for j := i + 1; j < len(nums); j++ {
			for j < k && nums[j]+nums[k] > d {
				k--
			}
			if j == k {
				break
			}
			if nums[j]+nums[k] == d {
				t := []int{nums[i], nums[j], nums[k]}
				str, _ := json.Marshal(t)
				if _, ok := exist[string(str)]; ok {
					continue
				} else {
					exist[string(str)] = true
					res = append(res, t)
				}
			}
		}
	}
	return res
}
