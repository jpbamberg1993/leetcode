package leetcode

func PivotIndex(nums []int) int {
	leftSums := make([]int, len(nums))
	rightSums := make([]int, len(nums))

	leftSums[0] = 0
	for i := 1; i < len(nums); i++ {
		leftSums[i] = leftSums[i-1] + nums[i-1]
	}

	rightSums[len(nums)-1] = 0
	for i := len(nums) - 2; i >= 0; i-- {
		rightSums[i] = rightSums[i+1] + nums[i+1]
	}

	for i := 0; i < len(nums); i++ {
		if leftSums[i] == rightSums[i] {
			return i
		}
	}

	return -1
}
