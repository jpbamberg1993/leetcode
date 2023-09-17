package leetcode

import (
	"math"
	"strings"
)

func GcdOfString(str1 string, str2 string) string {
	len1 := len(str1)
	len2 := len(str2)

	validString := func(substring string, k int) bool {
		if len1%k != 0 || len2%k != 0 {
			return false
		}
		return repeatString(substring, len1/k) == str1 && repeatString(substring, len2/k) == str2
	}

	for i := int(math.Min(float64(len1), float64(len2))); i > 0; i-- {
		substring := str1[0:i]
		if validString(substring, i) {
			return substring
		}
	}
	return ""
}

func repeatString(str string, count int) string {
	var result strings.Builder
	for i := 0; i < count; i++ {
		result.WriteString(str)
	}
	return result.String()
}
