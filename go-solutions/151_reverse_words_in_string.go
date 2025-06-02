package leetcode

import "strings"

func ReverseWordsInString(s string) string {
	words := strings.Fields(s)
	result := strings.Builder{}
	word := ""
	for i := len(words) - 1; i >= 0; i-- {
		word = words[i]
		if word == " " {
			continue
		}
		result.WriteString(word + " ")
	}
	return strings.TrimRight(result.String(), " ")
}
