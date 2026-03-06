package leetcode

import "strings"

func DecodeString(s string) string {
	var st []int32

	for _, v := range s {
		if v == ']' {
			subStr := make([]int32, 0)
			for st[len(st)-1] != '[' {
				subStr = append(subStr, st[len(st)-1])
				st = st[:len(st)-1]
			}
			st = st[:len(st)-1]
			k := 0
			base := 1
			for len(st) > 0 && st[len(st)-1] >= '0' && st[len(st)-1] <= '9' {
				k += int(st[len(st)-1]-'0') * base
				base *= 10
				st = st[:len(st)-1]
			}
			for k > 0 {
				for i := len(subStr) - 1; i >= 0; i-- {
					st = append(st, subStr[i])
				}
				k--
			}
		} else {
			st = append(st, v)
		}
	}

	var result strings.Builder
	for _, v := range st {
		result.WriteRune(rune(v))
	}
	return result.String()
}
