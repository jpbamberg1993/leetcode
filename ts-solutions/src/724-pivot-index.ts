export const pivotIndex = (nums: number[]) => {
	let leftSum = 0
	let sum = 0
	for (const num of nums) {
		sum += num
	}
	for (let i = 0; i < nums.length; i++) {
		if (leftSum === sum - leftSum - nums[i]) {
			return i
		}
		leftSum += nums[i]
	}
	return -1
}
