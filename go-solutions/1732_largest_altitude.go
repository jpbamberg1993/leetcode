package leetcode

func LargestAltitude(gain []int) int {
	currentAltitude := 0
	highestPoint := currentAltitude
	for _, g := range gain {
		currentAltitude += g
		highestPoint = max(currentAltitude, highestPoint)
	}
	return highestPoint
}
