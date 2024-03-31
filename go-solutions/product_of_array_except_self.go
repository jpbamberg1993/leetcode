package leetcode

func ProductExceptSelf(nums []int) []int {
	numsLen := len(nums)
	l := make([]int, numsLen)
	r := make([]int, numsLen)
	result := make([]int, numsLen)
	l[0] = 1
	for i := 1; i < numsLen; i++ {
		l[i] = l[i-1] * nums[i-1]
	}
	r[numsLen-1] = 1
	for i := numsLen - 2; i >= 0; i-- {
		r[i] = r[i+1] * nums[i+1]
	}
	for i := 0; i < numsLen; i++ {
		result[i] = l[i] * r[i]
	}
	return result
}
