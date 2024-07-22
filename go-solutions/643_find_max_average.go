package leetcode

func FindMaxAverage(nums []int, k int) float64 {
	sum := 0
	for i := 0; i < k; i++ {
		sum += nums[i]
	}
	res := sum
	for i := k; i < len(nums); i++ {
		sum += nums[i] - nums[i-k]
		res = max(res, sum)
	}
	return float64(res) / float64(k)
}
