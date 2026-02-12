package leetcode

import "go-solutions/utils"

func FindDifference(nums1, nums2 []int) [][]int {
	return [][]int{
		findDifference(nums1, nums2),
		findDifference(nums2, nums1),
	}
}

func findDifference(first, second []int) []int {
	firstSet := make(map[int]bool, len(first))
	for _, v := range first {
		firstSet[v] = true
	}
	for _, v := range second {
		if firstSet[v] {
			delete(firstSet, v)
		}
	}
	return utils.KeysToSlice(firstSet)
}
