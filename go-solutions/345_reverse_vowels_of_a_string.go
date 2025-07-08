package leetcode

func ReverseVowels(s string) string {
	sArr := []byte(s)
	left := 0
	right := len(sArr) - 1
	for left < right {
		for left < len(sArr) && !isVowel(sArr[left]) {
			left++
		}
		for right >= 0 && !isVowel(sArr[right]) {
			right--
		}
		if left < right {
			tmp := sArr[left]
			sArr[left] = sArr[right]
			sArr[right] = tmp
			left++
			right--
		}
	}
	return string(sArr)
}

func isVowel(ch byte) bool {
	for _, vowel := range vowels {
		if ch == vowel {
			return true
		}
	}
	return false
}
