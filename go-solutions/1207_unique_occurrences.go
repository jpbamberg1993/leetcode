package leetcode

func UniqueOccurrences(arr []int) bool {
	myMap := make(map[int]int)
	for _, v := range arr {
		myMap[v]++
	}
	mySet := make(map[int]struct{})
	for _, v := range myMap {
		mySet[v] = struct{}{}
	}
	return len(mySet) == len(myMap)
}
