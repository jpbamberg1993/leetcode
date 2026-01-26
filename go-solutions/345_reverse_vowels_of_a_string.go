package leetcode

import (
	"go-solutions/utils"
)

func ReverseVowels(s string) string {
	sSlice := []byte(s)
	left := 0
	right := len(s) - 1
	for left < right {
		for left < right && !utils.Vowels[sSlice[left]] {
			left++
		}
		for left < right && !utils.Vowels[sSlice[right]] {
			right--
		}
		sSlice[left], sSlice[right] = sSlice[right], sSlice[left]
		left++
		right--
	}
	return string(sSlice)
}
