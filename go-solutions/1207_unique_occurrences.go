package leetcode

func UniqueOccurrences(arr []int) bool {
	charToCountMap := make(map[int]int)
	for _, v := range arr {
		charToCountMap[v]++
	}
	countMap := make(map[int]struct{})
	for _, v := range charToCountMap {
		countMap[v] = struct{}{}
	}
	return len(countMap) == len(charToCountMap)
}
