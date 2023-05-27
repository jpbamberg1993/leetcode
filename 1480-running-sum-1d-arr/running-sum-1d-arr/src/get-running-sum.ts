export function getRunningSum(nums: number[]): number[] {
	let carry = 0
	const result: number[] = []
	for (const num of nums) {
		carry += num
		result.push(carry)
	}
	return result
}
