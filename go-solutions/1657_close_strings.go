package leetcode

import (
	"reflect"
	"sort"
)

func CloseStrings(word1 string, word2 string) bool {
	if len(word1) != len(word2) {
		return false
	}
	word1Map := [26]int{}
	word2Map := [26]int{}
	word1Bit := 0
	word2Bit := 0
	for i := 0; i < len(word1); i++ {
		char1ASC := word1[i] - 'a'
		word1Map[char1ASC]++
		word1Bit = word1Bit | (1 << (char1ASC))

		char2ASC := word2[i] - 'a'
		word2Map[char2ASC]++
		word2Bit = word2Bit | (1 << (char2ASC))
	}
	if word1Bit != word2Bit {
		return false
	}
	sort.Ints(word1Map[:])
	sort.Ints(word2Map[:])
	return reflect.DeepEqual(word1Map, word2Map)
}
