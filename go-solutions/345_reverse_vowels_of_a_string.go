package leetcode

func ReverseVowels(s string) string {
	characters := []byte(s)
	left := 0
	right := len(characters) - 1
	for left < right {
		for left < len(characters) && !isVowel(characters[left]) {
			left++
		}
		for right >= 0 && !isVowel(characters[right]) {
			right--
		}
		if left < right {
			swapChars(characters, left, right)
			left++
			right--
		}
	}
	return string(characters)
}

func swapChars(characters []byte, left, right int) {
	temp := characters[left]
	characters[left] = characters[right]
	characters[right] = temp
}

var tmpVowels []byte = []byte{'a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'}

func isVowel(ch byte) bool {
	for _, vowel := range tmpVowels {
		if ch == vowel {
			return true
		}
	}
	return false
}
