package leetcode

func MaxArea(height []int) int {
	maxArea := 0
	left, right := 0, len(height)-1
	for left < right {
		area := (right - left) * min(height[left], height[right])
		maxArea = max(maxArea, area)
		if height[left] > height[right] {
			right--
		} else {
			left++
		}
	}
	return maxArea
}
