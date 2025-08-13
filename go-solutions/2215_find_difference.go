package leetcode

import "go-solutions/utils"

func FindDifference(nums1 []int, nums2 []int) [][]int {
	diff1 := findDifference(nums1, nums2)
	diff2 := findDifference(nums2, nums1)
	return [][]int{diff1, diff2}
}

func findDifference(nums1 []int, nums2 []int) []int {
	nums2Map := make(map[int]int)
	for _, v := range nums2 {
		nums2Map[v] = 1
	}
	res := make(map[int]struct{})
	for _, v := range nums1 {
		tmp := nums2Map[v]
		if tmp == 0 {
			res[v] = struct{}{}
		}
	}
	return utils.KeysToSlice(res)
}
