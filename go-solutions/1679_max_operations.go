package leetcode

func MaxOperations(nums []int, k int) int {
	numsMap := make(map[int]int)
	for _, v := range nums {
		numsMap[v] += 1
	}
	count := 0
	for _, num := range nums {
		remainder := k - num
		current, _ := numsMap[num]
		compliment, _ := numsMap[remainder]
		if current > 0 && compliment > 0 {
			if num == remainder && compliment < 2 {
				continue
			}
			numsMap[num]--
			numsMap[compliment]--
			count++
		}
	}
	return count
}
