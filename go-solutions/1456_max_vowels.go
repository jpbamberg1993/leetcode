package leetcode

import (
	"slices"
)

var vowels = []uint8{97, 101, 105, 111, 117}

func MaxVowels(s string, k int) int {
	maxValue := 0
	for i := 0; i < k; i++ {
		if slices.Contains(vowels, s[i]) {
			maxValue++
		}
	}
	currentCount := maxValue
	for i := k; i < len(s); i++ {
		if slices.Contains(vowels, s[i]) {
			currentCount++
		}
		if slices.Contains(vowels, s[i-k]) {
			currentCount--
		}
		maxValue = max(maxValue, currentCount)
	}
	return maxValue
}
