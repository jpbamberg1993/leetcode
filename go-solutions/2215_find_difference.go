package leetcode

import "go-solutions/utils"

func FindDifference(nums1, nums2 []int) [][]int {
	return [][]int{
		findDifference(nums1, nums2),
		findDifference(nums2, nums1),
	}
}

func findDifference(first, second []int) []int {
	firstSet := make(map[int]bool)
	for _, v := range second {
		firstSet[v] = true
	}
	secondSet := make(map[int]bool)
	for _, v := range first {
		if firstSet[v] {
			continue
		}
		secondSet[v] = true
	}
	return utils.KeysToSlice(secondSet)
}
