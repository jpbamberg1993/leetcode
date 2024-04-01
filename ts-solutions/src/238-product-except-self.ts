export function productExceptSelf(nums: number[]): number[] {
	const numsLen = nums.length
	const answer = new Array(numsLen).fill(0)
	answer[0] = 1
	for (let i = 1; i < numsLen; i++) {
		answer[i] = answer[i - 1] * nums[i - 1]
	}
	let r = 1
	for (let i = numsLen - 1; i >= 0; i--) {
		answer[i] = answer[i] * r
		r *= nums[i]
	}
	return answer
}
