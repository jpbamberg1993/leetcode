package leetcode

import "sort"

func CloseStrings(word1 string, word2 string) bool {
	if len(word1) != len(word2) {
		return false
	}

	char1Set := make(map[int32]int)
	for _, c := range word1 {
		char1Set[c]++
	}

	char2Set := make(map[int32]int)
	for _, c := range word2 {
		char2Set[c]++
	}

	if len(char1Set) != len(char2Set) {
		return false
	}

	for _, c := range word2 {
		if _, ok := char1Set[c]; !ok {
			return false
		}
	}

	// now we need to check frequency
	char1Freq := make([]int, 0, len(char1Set))
	char2Freq := make([]int, 0, len(char2Set))

	for _, v := range char1Set {
		char1Freq = append(char1Freq, v)
	}
	for _, v := range char2Set {
		char2Freq = append(char2Freq, v)
	}

	sort.Ints(char1Freq)
	sort.Ints(char2Freq)

	return compareArrays(char1Freq, char2Freq)
}

func compareArrays(a, b []int) bool {
	if len(a) != len(b) {
		return false
	}
	for i := range a {
		if a[i] != b[i] {
			return false
		}
	}
	return true
}
