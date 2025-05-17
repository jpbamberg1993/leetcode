package leetcode

import "strconv"

func Compress(chars []byte) int {
	res := 0
	i := 0
	for i < len(chars) {
		groupLength := 0
		for i+groupLength < len(chars) && chars[i+groupLength] == chars[i] {
			groupLength++
		}
		chars[res] = chars[i]
		res++
		if groupLength > 1 {
			groupChars := strconv.Itoa(groupLength)
			for _, v := range groupChars {
				chars[res] = byte(v)
				res++
			}
		}
		i += groupLength
	}
	return res
}
