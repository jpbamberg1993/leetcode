package leetcode

func ProductExceptSelf(nums []int) []int {
	length := len(nums)
	answer := make([]int, length)
	answer[0] = 1
	for i := 1; i < length; i++ {
		answer[i] = answer[i-1] * nums[i-1]
	}
	r := 1
	for i := length - 1; i >= 0; i-- {
		answer[i] *= r
		r *= nums[i]
	}
	return answer
}
