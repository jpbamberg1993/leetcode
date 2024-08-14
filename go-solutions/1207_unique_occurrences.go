package leetcode

import "sort"

func UniqueOccurrences(arr []int) bool {
	const k = 1000
	freq := make([]int, k*2+1)
	for _, n := range arr {
		freq[n+k]++
	}
	sort.Ints(freq)
	for i := 0; i < k*2; i++ {
		if freq[i] != 0 && freq[i] == freq[i+1] {
			return false
		}
	}
	return true
}
