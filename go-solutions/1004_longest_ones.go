package leetcode

func LongestOnes(nums []int, k int) int {
	left := 0
	var right int
	for right = 0; right < len(nums); right++ {
		if nums[right] == 0 {
			k--
		}
		if k < 0 {
			k += 1 - nums[left]
			left++
		}
	}
	return right - left
}
