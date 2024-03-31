package leetcode

func ProductExceptSelf(nums []int) []int {
	l := make([]int, len(nums))
	r := make([]int, len(nums))
	for i := 0; i < len(nums); i++ {
		if i == 0 {
			l[i] = 1
		} else {
			l[i] = l[i-1] * nums[i-1]
		}
	}
	for i := len(r) - 1; i >= 0; i-- {
		if i == len(r)-1 {
			r[i] = 1
		} else {
			r[i] = r[i+1] * nums[i+1]
		}
	}
	result := make([]int, len(nums))
	for i := 0; i < len(result); i++ {
		result[i] = l[i] * r[i]
	}
	return result
}
