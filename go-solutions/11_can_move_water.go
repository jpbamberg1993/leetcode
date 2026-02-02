package leetcode

func MaxArea(height []int) int {
	maxArea := 1
	left, right := 0, len(height)-1
	for left < right {
		currentArea := (right - left) * min(height[left], height[right])
		maxArea = max(currentArea, maxArea)
		if height[left] < height[right] {
			left++
		} else {
			right--
		}
	}
	return maxArea
}
