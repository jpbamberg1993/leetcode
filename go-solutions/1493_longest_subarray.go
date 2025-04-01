package leetcode

func LongestSubarray(nums []int) int {
	result := 0
	left := 0
	zeroCount := 0
	for i := 0; i < len(nums); i++ {
		if nums[i] == 0 {
			zeroCount++
		}
		if zeroCount > 1 {
			if nums[left] == 0 {
				zeroCount--
			}
			left++
		}
		result = max(i-left, result)
	}
	return result
}
