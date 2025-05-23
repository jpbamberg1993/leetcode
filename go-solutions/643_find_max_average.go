package leetcode

func FindMaxAverage(nums []int, k int) float64 {
	maxSum := 0
	for i := 0; i < k; i++ {
		maxSum += nums[i]
	}
	currentSum := 0
	for i := k; i < len(nums); i++ {
		currentSum += nums[i] - nums[i-k]
		maxSum = max(currentSum, maxSum)
	}
	return float64(maxSum) / float64(k)
}
