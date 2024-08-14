package leetcode

func UniqueOccurrences(arr []int) bool {
	occurrences := make(map[int]int)
	for _, v := range arr {
		occurrences[v]++
	}
	keyMap := make(map[int]struct{})
	for key := range occurrences {
		if _, ok := keyMap[occurrences[key]]; ok {
			return false
		} else {
			keyMap[occurrences[key]] = struct{}{}
		}
	}
	return true
}
