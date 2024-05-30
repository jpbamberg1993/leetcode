package leetcode

func MoveZeroes(nums []int) {
	index := 0
	for _, num := range nums {
		if num != 0 {
			nums[index] = num
			index++
		}
	}
	for index < len(nums) {
		nums[index] = 0
		index++
	}
}
