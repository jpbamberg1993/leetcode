package leetcode

func MoveZeroes(nums []int) []int {
	lastNoneZero := 0
	for i := 0; i < len(nums); i++ {
		if nums[i] != 0 {
			nums[lastNoneZero] = nums[i]
			lastNoneZero++
		}
	}
	for i := lastNoneZero; i < len(nums); i++ {
		nums[i] = 0
	}
	return nums
}
