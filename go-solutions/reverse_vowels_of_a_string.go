package leetcode

func ReverseVowels(s string) string {
	start := 0
	end := len(s) - 1
	sChars := []rune(s)
	for start < end {
		for start < end && !isVowel(sChars[start]) {
			start++
		}
		for end > start && !isVowel(sChars[end]) {
			end--
		}
		if end > start {
			sChars[start], sChars[end] = sChars[end], sChars[start]
			start++
			end--
		}
	}
	return string(sChars)
}

func isVowel(ch rune) bool {
	return ch == 'A' || ch == 'a' || ch == 'E' || ch == 'e' || ch == 'I' || ch == 'i' || ch == 'O' || ch == 'o' || ch == 'U' || ch == 'u'
}
