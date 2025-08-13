package leetcode

func LargestAltitude(gain []int) int {
	maxAlt := 0
	runningSum := 0
	for _, v := range gain {
		runningSum += v
		maxAlt = max(runningSum, maxAlt)
	}
	return maxAlt
}
