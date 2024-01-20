package leetcode

import "strings"

func MergeAlternately(word1 string, word2 string) string {
	runes1 := []rune(word1)
	runes2 := []rune(word2)
	lenRunes1 := len(runes1)
	lenRunes2 := len(runes2)
	var responseString strings.Builder
	for i := 0; i < max(lenRunes1, lenRunes2); i++ {
		if i < lenRunes1 {
			responseString.WriteRune(runes1[i])
		}
		if i < lenRunes2 {
			responseString.WriteRune(runes2[i])
		}
	}
	return responseString.String()
}
