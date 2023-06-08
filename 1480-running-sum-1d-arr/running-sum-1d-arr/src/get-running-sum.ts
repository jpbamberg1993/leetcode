export function getRunningSum(nums: number[]): number[] {
	let previousValue = 0
	return nums.map(num => previousValue += num)
}
