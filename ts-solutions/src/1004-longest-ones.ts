export function longestOnes(nums: number[], k: number): number {
	let left = 0
	let right = 0
	for (; right < nums.length; right++) {
		if (nums[right] === 0) {
			k--
		}
		if (k < 0) {
			k += 1 - nums[left]
			left++
		}
	}
	return right - left
}
