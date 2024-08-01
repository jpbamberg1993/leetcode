export const longestSubarray = (nums: number[]) => {
	let left = 0
	let zeroes = 0
	let largestWindow = 0
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 0) {
			zeroes++
		}
		while (zeroes > 1) {
			zeroes -= nums[left] === 0 ? 1 : 0
			left++
		}
		largestWindow = Math.max(largestWindow, i - left)
	}
	return largestWindow
}
