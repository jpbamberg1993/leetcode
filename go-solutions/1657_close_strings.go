package leetcode

import "sort"

type kv struct {
	key   byte
	value int
}

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

	if len(word1Map) != len(word2Map) {
		return false
	}

	for v, _ := range word1Map {
		if _, ok := word2Map[v]; !ok {
			return false
		}
	}

	var word1KV []kv
	for k, v := range word1Map {
		word1KV = append(word1KV, kv{k, v})
	}
	var word2KV []kv
	for k, v := range word2Map {
		word2KV = append(word2KV, kv{k, v})
	}

	sort.Slice(word1KV, func(i, j int) bool {
		return word1KV[i].value < word1KV[j].value
	})

	sort.Slice(word2KV, func(i, j int) bool {
		return word2KV[i].value < word2KV[j].value
	})

	for i := 0; i < len(word1KV); i++ {
		word1V := word1KV[i].value
		word2V := word2KV[i].value
		if word1V != word2V {
			return false
		}
	}

	return true
}
