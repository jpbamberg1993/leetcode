export function productExceptSelf(nums: number[]): number[] {
	const length = nums.length
	const answer = new Array<number>(length).fill(0)
	answer[0] = 1
	for (let i = 1; i < length; i++) {
		answer[i] = answer[i - 1] * nums[i - 1]
	}
	let r = 1
	for (let i = length - 1; i >= 0; i--) {
		answer[i] *= r
		r *= nums[i]
	}
	return answer
}
