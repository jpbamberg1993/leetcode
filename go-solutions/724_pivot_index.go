package leetcode

func PivotIndex(nums []int) int {
	leftSum := 0
	rightSum := 0
	for i := 0; i < len(nums); i++ {
		rightSum += nums[i]
	}
	for i := 0; i < len(nums); i++ {
		if leftSum == rightSum-nums[i]-leftSum {
			return i
		}
		leftSum += nums[i]
	}
	return -1
}
