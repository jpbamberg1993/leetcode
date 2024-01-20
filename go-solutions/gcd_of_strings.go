package leetcode

import "strings"

func GcdOfString(str1 string, str2 string) string {
	len1 := len(str1)
	len2 := len(str2)
	for i := min(len1, len2); i >= 1; i-- {
		if isValid(str1, str2, i) {
			return str1[0:i]
		}
	}
	return ""
}

func isValid(str1 string, str2 string, k int) bool {
	len1 := len(str1)
	len2 := len(str2)
	if len1%k > 0 || len2%k > 0 {
		return false
	} else {
		base := str1[0:k]
		return strings.ReplaceAll(str1, base, "") == "" && strings.ReplaceAll(str2, base, "") == ""
	}
}
