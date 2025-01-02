package leetcode

import "strings"

var index int

func DecodeString(s string) string {
	index = 0
	return decodeString(s)
}

func decodeString(s string) string {
	result := strings.Builder{}
	for index < len(s) && s[index] != ']' {
		if !isDigit(s) {
			result.WriteByte(s[index])
			index++
		} else {
			n := 0
			for isDigit(s) {
				n = n*10 + int(s[index]-'0')
				index++
			}
			index++
			decodedString := decodeString(s)
			index++
			for n > 0 {
				result.WriteString(decodedString)
				n--
			}
		}
	}
	return result.String()
}

func isDigit(s string) bool {
	return s[index] >= '0' && s[index] <= '9'
}
