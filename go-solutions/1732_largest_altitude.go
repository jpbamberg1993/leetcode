package leetcode

func LargestAltitude(gain []int) int {
	highestPoint := 0
	currentPoint := 0
	for _, v := range gain {
		currentPoint += v
		highestPoint = max(highestPoint, currentPoint)
	}
	return highestPoint
}
