package leetcode

import "sort"

func MaxOperations(nums []int, k int) int {
	sort.Ints(nums)
	left, right, count := 0, len(nums)-1, 0
	for left < right {
		sum := nums[left] + nums[right]
		if sum < k {
			left++
		} else if sum > k {
			right--
		} else {
			left++
			right--
			count++
		}
	}
	return count
}
