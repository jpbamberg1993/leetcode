package leetcode

func MaxOperations(nums []int, k int) int {
	valueIndexMap := make(map[int]int)
	for i := 0; i < len(nums); i++ {
		current := nums[i]
		if _, exists := valueIndexMap[current]; exists {
			valueIndexMap[current]++
		} else {
			valueIndexMap[current] = 1
		}
	}
	count := 0
	for i := 0; i < len(nums); i++ {
		current := nums[i]
		remainder := k - current
		currentValue, _ := valueIndexMap[current]
		complimentValue, _ := valueIndexMap[remainder]
		if currentValue > 0 && complimentValue > 0 {
			if current == remainder && currentValue < 2 {
				continue
			}
			valueIndexMap[current] -= 1
			valueIndexMap[remainder] -= 1
			count++
		}
	}
	return count
}
