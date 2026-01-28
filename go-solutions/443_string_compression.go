package leetcode

import "strconv"

func Compress(chars []byte) int {
	i, res := 0, 0
	n := len(chars)
	for i < n {
		groupLen := 1
		for i+groupLen < n && chars[i] == chars[i+groupLen] {
			groupLen++
		}

		chars[res] = chars[i]
		res++

		if groupLen > 1 {
			groupLenAscii := strconv.Itoa(groupLen)
			for i := 0; i < len(groupLenAscii); i++ {
				chars[res] = groupLenAscii[i]
				res++
			}
		}
		i += groupLen
	}
	return res
}
