package leetcode

func FindMaxAverage(nums []int, k int) float64 {
	sum := make([]int, len(nums))
	sum[0] = nums[0]
	for i := 1; i < len(nums); i++ {
		sum[i] = sum[i-1] + nums[i]
	}
	res := float64(sum[k-1]) / float64(k)
	for i := k; i < len(nums); i++ {
		res = max(res, (float64(sum[i])-float64(sum[i-k]))/float64(k))
	}
	return res
}
