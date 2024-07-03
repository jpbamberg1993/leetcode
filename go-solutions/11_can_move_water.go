package leetcode

func MaxArea(height []int) int {
	leftPointer := 0
	rightPointer := len(height) - 1
	maxArea := 0
	for leftPointer < rightPointer {
		width := rightPointer - leftPointer
		maxArea = max(maxArea, min(height[leftPointer], height[rightPointer])*width)
		if height[leftPointer] <= height[rightPointer] {
			leftPointer++
		} else {
			rightPointer--
		}
	}
	return maxArea
}
