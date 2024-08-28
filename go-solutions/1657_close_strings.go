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
	for i := 0; i < len(word1); i++ {
		word1Map[word1[i]-'a']++
		word2Map[word2[i]-'a']++
	}
	for i := 0; i < len(word1Map); i++ {
		if word1Map[i] > 0 && word2Map[i] == 0 {
			return false
		}
		if word1Map[i] == 0 && word2Map[i] > 0 {
			return false
		}
	}
	sort.Ints(word1Map[:])
	sort.Ints(word2Map[:])
	return reflect.DeepEqual(word1Map, word2Map)
}
