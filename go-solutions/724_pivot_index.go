package leetcode

func PivotIndex(nums []int) int {
	sum := 0
	leftSum := 0
	for _, v := range nums {
		sum += v
	}
	for i, v := range nums {
		if leftSum == sum-leftSum-v {
			return i
		}
		leftSum += v
	}
	return -1
}
