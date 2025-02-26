package leetcode

import "sort"

func CloseStrings(word1 string, word2 string) bool {
	if len(word1) != len(word2) {
		return false
	}

	char1Set := make(map[uint8]int)
	char2Set := make(map[uint8]int)
	for i := 0; i < len(word1); i++ {
		char1Set[word1[i]]++
		char2Set[word2[i]]++
	}

	if len(char1Set) != len(char2Set) {
		return false
	}

	for i := 0; i < len(word1); i++ {
		word1Char := word1[i]
		if _, exists := char2Set[word1Char]; !exists {
			return false
		}

		word2Char := word2[i]
		if _, exists := char1Set[word2Char]; !exists {
			return false
		}
	}

	char1Freq := make([]int, 0, len(char1Set))
	char2Freq := make([]int, 0, len(char2Set))
	for _, v := range char1Set {
		char1Freq = append(char1Freq, v)
	}
	for _, v := range char2Set {
		char2Freq = append(char2Freq, v)
	}

	return compareArrays(char1Freq, char2Freq)
}

func compareArrays(a, b []int) bool {
	if len(a) != len(b) {
		return false
	}
	sort.Ints(a)
	sort.Ints(b)
	for i := range a {
		if a[i] != b[i] {
			return false
		}
	}
	return true
}
