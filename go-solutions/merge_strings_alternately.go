package leetcode

import "strings"

func MergeAlternately(word1 string, word2 string) string {
	runes1 := []rune(word1)
	runes2 := []rune(word2)
	var responseString strings.Builder
	var currentIndex int
	for currentIndex < max(len(runes1), len(runes2)) {
		if currentIndex < len(runes1) {
			responseString.WriteRune(runes1[currentIndex])
		}
		if currentIndex < len(runes2) {
			responseString.WriteRune(runes2[currentIndex])
		}
		currentIndex++
	}
	return responseString.String()
}
