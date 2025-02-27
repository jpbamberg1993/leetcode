package leetcode

import "sort"

func CloseStrings(word1 string, word2 string) bool {
	if len(word1) != len(word2) {
		return false
	}

	char1Set := make(map[int32]int)
	for _, v := range word1 {
		char1Set[v]++
	}
	char2Set := make(map[int32]int)
	for _, v := range word2 {
		char2Set[v]++
	}

	if !mapsAreEqual(char1Set, char2Set) {
		return false
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

func mapsAreEqual(set map[int32]int, set2 map[int32]int) bool {
	if len(set) != len(set2) {
		return false
	}
	for key := range set {
		if _, exists := set2[key]; !exists {
			return false
		}
	}
	return true
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
