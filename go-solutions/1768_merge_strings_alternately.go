package leetcode

import "strings"

func MergeAlternately(word1, word2 string) string {
	result := strings.Builder{}
	m, n := len(word1), len(word2)
	for i := 0; i < max(m, n); i++ {
		if i < m {
			result.WriteByte(word1[i])
		}
		if i < n {
			result.WriteByte(word2[i])
		}
	}
	return result.String()
}
