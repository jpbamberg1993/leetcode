package leetcode

import "strings"

func ReverseWordsInString(s string) string {
	words := strings.Fields(s)
	var result strings.Builder
	for i := len(words) - 1; i >= 0; i-- {
		result.WriteString(strings.TrimSpace(words[i]) + " ")
	}
	return strings.TrimRight(result.String(), " ")
}
