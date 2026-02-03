package leetcode

import (
	"sort"
)

func MaxOperations(nums []int, k int) int {
	sort.Ints(nums)
	result := 0
	left, right := 0, len(nums)-1
	for left < right {
		sum := nums[left] + nums[right]
		if sum == k {
			result++
			left++
			right--
		} else if sum > k {
			right--
		} else {
			left++
		}
	}
	return result
}
