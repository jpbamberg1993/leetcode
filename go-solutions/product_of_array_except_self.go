package leetcode

func ProductExceptSelf(nums []int) []int {
	numsLen := len(nums)
	result := make([]int, numsLen)
	result[0] = 1
	for i := 1; i < numsLen; i++ {
		result[i] = result[i-1] * nums[i-1]
	}
	r := 1
	for i := numsLen - 1; i >= 0; i-- {
		result[i] = result[i] * r
		r *= nums[i]
	}
	return result
}
