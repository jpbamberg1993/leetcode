package leetcode

import "math"

func IncreasingTriplet(nums []int) bool {
	firstNum := math.MaxInt32
	secondNum := math.MaxInt32
	for _, num := range nums {
		if num < firstNum {
			firstNum = num
		} else if num < secondNum {
			secondNum = num
		} else {
			return true
		}
	}
	return false
}
