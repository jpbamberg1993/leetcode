package leetcode

import "go-solutions/utils"

func FindDifference(nums1, nums2 []int) [][]int {
	return [][]int{
		findDifference(nums1, nums2),
		findDifference(nums2, nums1),
	}
}

func findDifference(first, second []int) []int {
	secondHas := make(map[int]bool)
	for _, v := range second {
		secondHas[v] = true
	}
	result := make(map[int]bool)
	for _, v := range first {
		if _, ok := secondHas[v]; !ok {
			result[v] = true
		}
	}
	return utils.KeysToSlice(result)
}
