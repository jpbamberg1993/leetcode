package leetcode

import "strconv"

func Compress(chars []byte) int {
	res := 0
	i := 0
	for i < len(chars) {
		groupLen := 1
		for i+groupLen < len(chars) && chars[i+groupLen] == chars[i] {
			groupLen += 1
		}
		chars[res] = chars[i]
		res += 1
		if groupLen > 1 {
			groupLenStr := strconv.Itoa(groupLen)
			for _, v := range groupLenStr {
				chars[res] = byte(v)
				res += 1
			}
		}
		i += groupLen
	}
	return res
}
