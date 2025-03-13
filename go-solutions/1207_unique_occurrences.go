package leetcode

func UniqueOccurrences(arr []int) bool {
	freqSet := make(map[int]int)
	for _, a := range arr {
		freqSet[a]++
	}
	freqSlice := make(map[int]struct{})
	for _, v := range freqSet {
		freqSlice[v] = struct{}{}
	}
	return len(freqSet) == len(freqSlice)
}
