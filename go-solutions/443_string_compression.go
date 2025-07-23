package leetcode

import "strconv"

func Compress(chars []byte) int {
	i, res := 0, 0

	for i < len(chars) {
		groupLength := 0
		for i+groupLength < len(chars) && chars[i] == chars[i+groupLength] {
			groupLength++
		}
		chars[res] = chars[i]
		res++
		if groupLength > 1 {
			groupLengthChars := strconv.Itoa(groupLength)
			for i := 0; i < len(groupLengthChars); i++ {
				chars[res] = groupLengthChars[i]
				res++
			}
		}
		i += groupLength
	}
	return res
}
