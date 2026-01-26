package leetcode

import "strings"

func ReverseWordsInString(s string) string {
	sSlice := strings.Fields(s)
	left, right := 0, len(sSlice)-1
	for left < right {
		sSlice[left], sSlice[right] = sSlice[right], sSlice[left]
		left++
		right--
	}
	return strings.Join(sSlice, " ")
}
