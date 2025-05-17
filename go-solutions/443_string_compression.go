package leetcode

import "strconv"

func Compress(chars []byte) int {
	walker, runner := 0, 0
	for runner < len(chars) {
		charLength := 0
		for runner+charLength < len(chars) && chars[runner] == chars[runner+charLength] {
			charLength++
		}
		chars[walker] = chars[runner]
		walker++
		if charLength > 1 {
			charLengthAsc := strconv.Itoa(charLength)
			for i := 0; i < len(charLengthAsc); i++ {
				chars[walker] = charLengthAsc[i]
				walker++
			}
		}
		runner += charLength
	}
	return walker
}
