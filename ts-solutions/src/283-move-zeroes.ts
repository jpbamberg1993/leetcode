export function moveZeroes(nums: number[]): void {
	let lastNonZeroIndex = 0
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			;[nums[i], nums[lastNonZeroIndex]] = [nums[lastNonZeroIndex], nums[i]]
			lastNonZeroIndex++
		}
	}
}
