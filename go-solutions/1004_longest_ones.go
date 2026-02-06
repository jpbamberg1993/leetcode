package leetcode

func LongestOnes(nums []int, k int) int {
	l, r := 0, 0
	for r = 0; r < len(nums); r++ {
		if nums[r] == 0 {
			k--
		}
		if k < 0 {
			k += 1 - nums[l]
			l++
		}
	}
	return r - l
}
