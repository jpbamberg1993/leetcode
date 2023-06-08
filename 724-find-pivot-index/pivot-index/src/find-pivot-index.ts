export function pivotIndex(nums: number[]): number {
	let left = 0
	const sum = nums.reduce((a, c) => a + c, 0)
	for (let i = 0; i < nums.length; i++) {
		if (left === sum - left - nums[i]) return i
		left += nums[i]
	}
	return -1
}
