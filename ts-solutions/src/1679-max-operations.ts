export const maxOperations = (nums: number[], k: number): number => {
	nums.sort((a, b) => a - b)
	let left = 0,
		right = nums.length - 1,
		count = 0
	while (left < right) {
		const sum = nums[left] + nums[right]
		if (sum < k) {
			left++
		} else if (sum > k) {
			right--
		} else {
			left++
			right--
			count++
		}
	}
	return count
}
