package leetcode

import "go-solutions/utils"

func MaxArea(height []int) int {
	left, right, maxArea := 0, len(height)-1, 0
	for left < right {
		area := utils.Abs(right-left) * utils.Min(height[left], height[right])
		maxArea = max(maxArea, area)
		if height[left] < height[right] {
			left++
		} else {
			right--
		}
	}
	return maxArea
}
