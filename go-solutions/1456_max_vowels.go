package leetcode

import (
	"slices"
)

var vowels = []uint8{'a', 'e', 'i', 'o', 'u'}

func MaxVowels(s string, k int) int {
	currentMax := 0
	for i := 0; i < k; i++ {
		if slices.Contains(vowels, s[i]) {
			currentMax++
		}
	}
	result := currentMax
	for i := k; i < len(s); i++ {
		if slices.Contains(vowels, s[i]) {
			currentMax++
		}
		if slices.Contains(vowels, s[i-k]) {
			currentMax--
		}
		result = max(result, currentMax)
	}
	return result
}
