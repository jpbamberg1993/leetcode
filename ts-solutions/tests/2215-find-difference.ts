import { findDifference } from '../src/2215-find-difference'

type FindDifferenceTest = {
	nums1: number[]
	nums2: number[]
	want: number[][]
}

const findDifferenceTests: FindDifferenceTest[] = [
	{
		nums1: [1, 2, 3],
		nums2: [2, 4, 6],
		want: [
			[1, 3],
			[4, 6],
		],
	},
	{
		nums1: [1, 2, 3, 3],
		nums2: [1, 1, 2, 2],
		want: [[3], []],
	},
]

describe(`findDifferenceTests`, () => {
	it.each(findDifferenceTests)(
		`findDifference($nums1, $nums2 => $want`,
		({ nums1, nums2, want }) => {
			const got = findDifference(nums1, nums2)
			expect(got).toEqual(want)
		}
	)
})
