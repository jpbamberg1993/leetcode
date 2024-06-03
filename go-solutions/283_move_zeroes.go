package leetcode

func MoveZeroes(nums []int) {
	lastNonZero := 0
	for cur := 0; cur < len(nums); cur++ {
		if nums[cur] != 0 {
			nums[cur], nums[lastNonZero] = nums[lastNonZero], nums[cur]
			lastNonZero++
		}
	}
}
