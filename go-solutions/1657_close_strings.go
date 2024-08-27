package leetcode

import (
	"reflect"
	"sort"
)

func CloseStrings(word1 string, word2 string) bool {
	if len(word1) != len(word2) {
		return false
	}
	word1Map := map[byte]int{}
	word2Map := map[byte]int{}
	for i := 0; i < len(word1); i++ {
		word1Map[word1[i]]++
		word2Map[word2[i]]++
	}
	if !mapsHaveEqualKeys(word1Map, word2Map) {
		return false
	}
	word1Frequency := mapValuesToSortedList(word1Map)
	word2Frequency := mapValuesToSortedList(word2Map)
	return reflect.DeepEqual(word1Frequency, word2Frequency)
}

func mapValuesToSortedList(m map[byte]int) []int {
	values := make([]int, 0, len(m))
	for _, v := range m {
		values = append(values, v)
	}
	sort.Ints(values)
	return values
}

func mapsHaveEqualKeys[K comparable, V1, V2 any](map1 map[K]V1, map2 map[K]V2) bool {
	if len(map1) != len(map2) {
		return false
	}

	for key := range map1 {
		if _, ok := map2[key]; !ok {
			return false
		}
	}

	return true
}
