package leetcode

import (
	"slices"
	"sort"
)

func CloseStrings(word1, word2 string) bool {
	if len(word1) != len(word2) {
		return false
	}
	alphabetCount := 26
	countMap1 := make([]int, alphabetCount)
	countMap2 := make([]int, alphabetCount)
	for i := 0; i < len(word1); i++ {
		countMap1[word1[i]-'a']++
		countMap2[word2[i]-'a']++
	}
	for i := 0; i < alphabetCount; i++ {
		if (countMap1[i] > 0 && countMap2[i] == 0) || (countMap1[i] == 0 && countMap2[i] > 0) {
			return false
		}
	}
	sort.Ints(countMap1)
	sort.Ints(countMap2)
	return slices.Equal(countMap1, countMap2)
}
