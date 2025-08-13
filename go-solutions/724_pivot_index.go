package leetcode

func PivotIndex(nums []int) int {
	rightSum := 0
	for _, num := range nums {
		rightSum += num
	}
	leftSum := 0
	for i := 0; i < len(nums); i++ {
		leftSum += nums[i]
		rightSum -= nums[i]
		if leftSum == rightSum {
			return i
		}
	}
	return -1
}
