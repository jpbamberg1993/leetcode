export function runningSum(nums: number[]): number[] {
	let previous = 0
	return nums.map((i) => (previous += i))
}
