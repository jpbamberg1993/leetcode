package leetcode

func LongestSubarray(nums []int) int {
	l := 0
	zeroCount := 0
	result := 0
	for r := 0; r < len(nums); r++ {
		if nums[r] == 0 {
			zeroCount++
		}
		for zeroCount > 1 {
			if nums[l] == 0 {
				zeroCount--
			}
			l++
		}
		result = max(result, r-l)
	}
	return result
}
