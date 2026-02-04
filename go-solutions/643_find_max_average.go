package leetcode

func FindMaxAverage(nums []int, k int) float64 {
	maxSum := 0
	for i := 0; i < k; i++ {
		maxSum += nums[i]
	}
	left := 0
	right := k
	runningSum := maxSum
	for right < len(nums) {
		runningSum -= nums[left]
		runningSum += nums[right]
		left++
		right++
		maxSum = max(maxSum, runningSum)
	}
	return float64(maxSum) / float64(k)
}
