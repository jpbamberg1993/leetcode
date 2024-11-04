package leetcode

import "unicode"

func DecodeString(s string) string {
	stack := make([]rune, 0)
	for i := 0; i < len(s); i++ {
		ch := rune(s[i])
		if ch != ']' {
			stack = append(stack, ch)
		} else {
			var temp []rune
			for stack[len(stack)-1] != '[' {
				lastChar := stack[len(stack)-1]
				stack = stack[:len(stack)-1]
				temp = append(temp, lastChar)
			}
			stack = stack[:len(stack)-1]
			base := 1
			k := 0
			for len(stack) > 0 && unicode.IsDigit(stack[len(stack)-1]) {
				lastChar := stack[len(stack)-1]
				stack = stack[:len(stack)-1]
				k = k + int(lastChar-'0')*base
				base *= 10
			}
			for k != 0 {
				for i := len(temp) - 1; i >= 0; i-- {
					stack = append(stack, temp[i])
				}
				k--
			}
		}
	}
	return string(stack)
}
