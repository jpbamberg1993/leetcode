package leetcode

import (
	"reflect"
	"slices"
)

func CloseStrings(word1, word2 string) bool {
	word1Len := len(word1)
	word2Len := len(word2)
	if word1Len != word2Len {
		return false
	}
	word1Map, word2Map := make([]uint8, 26), make([]uint8, 26)
	for i := 0; i < word1Len; i++ {
		word1Map[word1[i]-'a']++
		word2Map[word2[i]-'a']++
	}
	for i := 0; i < 26; i++ {
		if word1Map[i] > 0 && word2Map[i] == 0 {
			return false
		}
		if word2Map[i] > 0 && word1Map[i] == 0 {
			return false
		}
	}
	slices.Sort(word1Map)
	slices.Sort(word2Map)
	return reflect.DeepEqual(word1Map, word2Map)
}
