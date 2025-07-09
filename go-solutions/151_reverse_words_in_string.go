package leetcode

import "strings"

func ReverseWordsInString(s string) string {
	words := strings.Fields(s)
	left := 0
	right := len(words) - 1
	for left < right {
		tmp := words[left]
		words[left] = words[right]
		words[right] = tmp
		left++
		right--
	}
	return strings.Join(words, " ")
}
