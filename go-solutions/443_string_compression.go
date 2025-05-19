package leetcode

import "strconv"

func Compress(chars []byte) int {
	runner, walker := 0, 0
	for runner < len(chars) {
		group := 0
		for runner+group < len(chars) && chars[runner] == chars[runner+group] {
			group++
		}
		chars[walker] = chars[runner]
		walker++
		if group > 1 {
			groupChars := strconv.Itoa(group)
			for _, char := range groupChars {
				chars[walker] = byte(char)
				walker++
			}
		}
		runner += group
	}
	return walker
}
