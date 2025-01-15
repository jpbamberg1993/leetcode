package leetcode

func RemoveStars(s string) string {
	chars := make([]uint8, len(s))
	var j int
	for i := 0; i < len(s); i++ {
		if s[i] == '*' {
			j--
		} else {
			chars[j] = s[i]
			j++
		}
	}
	return string(chars[:j])
}
