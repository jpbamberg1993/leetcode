package leetcode

import (
	"slices"
	"sort"
)

func CloseStrings(word1 string, word2 string) bool {
	if len(word1) != len(word2) {
		return false
	}

	alphabetLength := 26
	char1Set := make([]int, alphabetLength)
	char2Set := make([]int, alphabetLength)
	for i := 0; i < len(word1); i++ {
		char1Set[word1[i]-'a'] += 1
		char2Set[word2[i]-'a'] += 1
	}

	for i := 0; i < alphabetLength; i++ {
		if char1Set[i] > 0 && char2Set[i] <= 0 {
			return false
		}
		if char2Set[i] > 0 && char1Set[i] <= 0 {
			return false
		}
	}

	sort.Ints(char1Set)
	sort.Ints(char2Set)
	return slices.Equal(char1Set, char2Set)
}
