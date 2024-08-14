package leetcode

func FindDifference(nums1 []int, nums2 []int) [][]int {
	return [][]int{getElementsOnlyInFirstList(nums1, nums2), getElementsOnlyInFirstList(nums2, nums1)}
}

func getElementsOnlyInFirstList(nums1 []int, nums2 []int) []int {
	existsInNum2 := make(map[int]struct{})
	for _, num := range nums2 {
		existsInNum2[num] = struct{}{}
	}
	onlyInNums1 := make(map[int]struct{})
	for _, n := range nums1 {
		if _, ok := existsInNum2[n]; !ok {
			onlyInNums1[n] = struct{}{}
		}
	}
	return setToSlice(onlyInNums1)
}

func setToSlice(nums map[int]struct{}) []int {
	var result []int
	for n := range nums {
		result = append(result, n)
	}
	return result
}
