package leetcode

func LongestSubarray(nums []int) int {
	left := 0
	deleted := 0
	longestWindow := 0
	for right := 0; right < len(nums); right++ {
		if nums[right] == 0 {
			deleted++
		}
		for deleted > 1 {
			if nums[left] == 0 {
				deleted--
			}
			left++
		}
		longestWindow = max(longestWindow, right-left)
	}
	return longestWindow
}
