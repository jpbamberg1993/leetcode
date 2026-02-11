package leetcode

func PivotIndex(nums []int) int {
	n := len(nums)
	if n == 0 {
		return -1
	}
	left := make([]int, len(nums))
	left[0] = 0
	for i := 1; i < n; i++ {
		left[i] = left[i-1] + nums[i-1]
	}
	rSum := 0
	for i := n - 1; i >= 0; i-- {
		if left[i] == rSum {
			return i
		}
		rSum += nums[i]
	}
	return -1
}
