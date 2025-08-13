package leetcode

func UniqueOccurrences(arr []int) bool {
	countMap := make(map[int]int)
	for _, v := range arr {
		countMap[v]++
	}
	countStack := make(map[int]struct{})
	for _, v := range countMap {
		countStack[v] = struct{}{}
	}
	return len(countStack) == len(countMap)
}
