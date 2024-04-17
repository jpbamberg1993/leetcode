package leetcode

import "strings"

func MergeAlternately(word1 string, word2 string) string {
	m := len(word1)
	n := len(word2)
	s := strings.Builder{}
	for i := 0; i < max(m, n); i++ {
		if i < len(word1) {
			s.WriteByte(word1[i])
		}
		if i < len(word2) {
			s.WriteByte(word2[i])
		}
	}
	return s.String()
}
