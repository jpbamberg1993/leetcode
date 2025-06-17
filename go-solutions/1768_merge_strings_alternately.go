package leetcode

import "strings"

func MergeAlternately(word1, word2 string) string {
	m, n := len(word1), len(word2)
	result := strings.Builder{}
	for i := 0; i < max(len(word1), len(word2)); i++ {
		if i < m {
			result.WriteByte(word1[i])
		}
		if i < n {
			result.WriteByte(word2[i])
		}
	}
	return result.String()
}
