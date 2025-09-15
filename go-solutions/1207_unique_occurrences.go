package leetcode

func UniqueOccurrences(arr []int) bool {
	countMap := make(map[int]int)
	for _, v := range arr {
		countMap[v]++
	}
	uniqueMap := make(map[int]any)
	for _, v := range countMap {
		uniqueMap[v] = struct{}{}
	}
	return len(uniqueMap) == len(countMap)
}
