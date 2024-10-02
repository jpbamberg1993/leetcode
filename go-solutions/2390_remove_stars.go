package leetcode

func RemoveStars(s string) string {
	ch := make([]rune, len(s))
	j := 0
	for i := 0; i < len(s); i++ {
		if s[i] == '*' {
			j--
		} else {
			ch[j] = rune(s[i])
			j++
		}
	}
	return string(ch[:j])
}
