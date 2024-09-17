package leetcode

import (
	"strconv"
	"strings"
)

func EqualPairs(grid [][]int) int {
	counterMap := make(map[string]int)
	for i := 0; i < len(grid); i++ {
		rowKey := intsToString(grid[i])
		counterMap[rowKey]++
	}

	counter := 0
	for i := 0; i < len(grid); i++ {
		columnArr := make([]int, len(grid))
		for j := 0; j < len(grid); j++ {
			columnArr[j] = grid[j][i]
		}
		counterKey := intsToString(columnArr)
		counter += counterMap[counterKey]
	}

	return counter
}

func intsToString(arr []int) string {
	return strings.Join(hashIntArray(arr), ",")
}

func hashIntArray(arr []int) []string {
	strSlice := make([]string, len(arr))
	for i := 0; i < len(arr); i++ {
		strSlice[i] = strconv.Itoa(arr[i])
	}
	return strSlice
}
