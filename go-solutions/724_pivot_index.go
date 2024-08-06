package leetcode

func PivotIndex(nums []int) int {
	leftSum := 0
	sum := 0
	for _, n := range nums {
		sum += n
	}
	for i, num := range nums {
		if leftSum == sum-leftSum-num {
			return i
		}
		leftSum += num
	}
	return -1
}
