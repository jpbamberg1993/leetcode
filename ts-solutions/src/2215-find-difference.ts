export const findDifference = (
	nums1: number[],
	nums2: number[]
): number[][] => {
	return [firstDiff(nums1, nums2), firstDiff(nums2, nums1)]
}

const firstDiff = (nums1: number[], nums2: number[]): number[] => {
	const inNums2 = new Map<number, null>()
	for (const n of nums2) {
		inNums2.set(n, null)
	}
	const result = new Map<number, null>()
	for (const n of nums1) {
		if (!inNums2.has(n)) {
			result.set(n, null)
		}
	}
	return Array.from(result.keys())
}
