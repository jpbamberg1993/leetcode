package leetcode

import (
	"strings"
)

func DecodeString(s string) string {
	stk := make([]int32, 0)
	for _, v := range s {
		if v == ']' {
			var subStr []int32
			for len(stk) > 0 && stk[len(stk)-1] != '[' {
				subStr = append(subStr, stk[len(stk)-1])
				stk = stk[:len(stk)-1]
			}
			stk = stk[:len(stk)-1]
			var k int32
			var base int32
			base = 1
			for len(stk) > 0 && stk[len(stk)-1] >= '0' && stk[len(stk)-1] <= '9' {
				k += base * (stk[len(stk)-1] - '0')
				base *= 10
				stk = stk[:len(stk)-1]
			}
			for k > 0 {
				for i := len(subStr) - 1; i >= 0; i-- {
					stk = append(stk, subStr[i])
				}
				k--
			}
		} else {
			stk = append(stk, v)
		}
	}
	var result strings.Builder
	for _, v := range stk {
		result.WriteRune(rune(v))
	}
	return result.String()
}
