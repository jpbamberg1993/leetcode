package leetcode

func ReverseVowels(s string) string {
	runes := []rune(s)
	l := 0
	r := len(s) - 1
	for l < r {
		for l < len(runes) && !isVowel(runes[l]) {
			l++
		}
		for r >= 0 && !isVowel(runes[r]) {
			r--
		}
		if l < r {
			swapChars(&runes, l, r)
			l++
			r--
		}
	}
	return string(runes)
}

func isVowel(r rune) bool {
	return r == 'A' || r == 'a' || r == 'E' || r == 'e' || r == 'I' || r == 'i' || r == 'O' || r == 'o' || r == 'U' || r == 'u'
}

func swapChars(runes *[]rune, l, r int) {
	runesVal := *runes
	temp := runesVal[l]
	runesVal[l] = runesVal[r]
	runesVal[r] = temp
}
