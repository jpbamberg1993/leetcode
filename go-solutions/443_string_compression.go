package leetcode

import "strconv"

func Compress(chars []byte) int {
	res := 0
	i := 0
	for i < len(chars) {
		groupLength := 0
		for groupLength+i < len(chars) && chars[groupLength+i] == chars[i] {
			groupLength++
		}
		chars[res] = chars[i]
		res++
		if groupLength > 1 {
			countStr := strconv.Itoa(groupLength)
			for j := 0; j < len(countStr); j++ {
				chars[res] = countStr[j]
				res++
			}
		}
		i += groupLength
	}
	return res
}
