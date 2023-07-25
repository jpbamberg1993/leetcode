export function pivotIndex(nums: number[]): number {
	const sum = nums.reduce((acc, num) => (acc += num), 0)
	let left = 0
	for (let i = 0; i < nums.length; i++) {
		if (left === sum - left - nums[i]) {
			return i
		}
		left += nums[i]
	}
	return -1
}
