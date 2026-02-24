package leetcode

import (
	"bytes"
)

func RemoveStars(s string) string {
	var b bytes.Buffer
	for i := 0; i < len(s); i++ {
		if s[i] == '*' {
			if b.Len() > 0 {
				b.Truncate(b.Len() - 1)
			}
		} else {
			b.WriteByte(s[i])
		}
	}
	return b.String()
}
