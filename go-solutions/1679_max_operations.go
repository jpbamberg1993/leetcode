package leetcode

func MaxOperations(nums []int, k int) int {
	valueIndexMap := make(map[int]int)
	count := 0
	for i := 0; i < len(nums); i++ {
		current := nums[i]
		compliment := k - current
		complimentValue, complimentExists := valueIndexMap[compliment]
		if complimentExists && complimentValue > 0 {
			valueIndexMap[compliment]--
			count++
		} else {
			valueIndexMap[current]++
		}
	}
	return count
}
