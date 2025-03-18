package leetcode

import "go-solutions/utils"

func FindDifference(nums1, nums2 []int) [][]int {
	return [][]int{getElementsOnlyInFirstList(nums1, nums2), getElementsOnlyInFirstList(nums2, nums1)}
}

func getElementsOnlyInFirstList(nums1, nums2 []int) []int {
	onlyInNums1 := make(map[int]struct{}, len(nums1))

	nums2Set := make(map[int]struct{})
	for _, n := range nums2 {
		nums2Set[n] = struct{}{}
	}

	for _, n := range nums1 {
		if _, ok := nums2Set[n]; !ok {
			onlyInNums1[n] = struct{}{}
		}
	}

	return utils.KeysToSlice(onlyInNums1)
}
