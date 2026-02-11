package leetcode

func LargestAltitude(gain []int) int {
	result := 0
	runningSum := 0
	for _, v := range gain {
		runningSum += v
		result = max(result, runningSum)
	}
	return result
}
