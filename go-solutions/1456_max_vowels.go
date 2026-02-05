package leetcode

import "go-solutions/utils"

func MaxVowels(s string, k int) int {
	maxVowel := 0
	for i := 0; i < k; i++ {
		if utils.Vowels[s[i]] {
			maxVowel++
		}
	}
	runningVowel := maxVowel
	for r := k; r < len(s); r++ {
		if utils.Vowels[s[r-k]] {
			runningVowel--
		}
		if utils.Vowels[s[r]] {
			runningVowel++
		}
		maxVowel = max(maxVowel, runningVowel)
	}
	return maxVowel
}
