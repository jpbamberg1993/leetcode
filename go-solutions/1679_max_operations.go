package leetcode

func MaxOperations(nums []int, k int) int {
	numsMap := make(map[int]int)
	for _, v := range nums {
		numsMap[v] += 1
	}
	count := 0
	for _, num := range nums {
		remainder := k - num
		currentCount, _ := numsMap[num]
		complimentCount, _ := numsMap[remainder]
		if currentCount > 0 && complimentCount > 0 {
			if num == remainder && complimentCount < 2 {
				continue
			}
			numsMap[num]--
			numsMap[complimentCount]--
			count++
		}
	}
	return count
}
