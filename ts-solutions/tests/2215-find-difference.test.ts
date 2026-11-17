import { findDifference } from '../src/2215-find-difference'

type FindDifferenceTest = {
	name: string
	nums1: number[]
	nums2: number[]
	want: number[][]
}

const findDifferenceTests: FindDifferenceTest[] = [
	{
		name: `each list has values the other lacks`,
		nums1: [1, 2, 3],
		nums2: [2, 4, 6],
		want: [
			[1, 3],
			[4, 6],
		],
	},
	{
		name: `duplicates are reported once`,
		nums1: [1, 2, 3, 3],
		nums2: [1, 1, 2, 2],
		want: [[3], []],
	},
	{
		name: `lists share no values`,
		nums1: [1, 2],
		nums2: [3, 4],
		want: [
			[1, 2],
			[3, 4],
		],
	},
	{
		name: `same values in a different order`,
		nums1: [1, 2],
		nums2: [2, 1],
		want: [[], []],
	},
	{
		name: `negative numbers`,
		nums1: [-1, 0],
		nums2: [0, 1],
		want: [[-1], [1]],
	},
]

const sortEach = (lists: number[][]) =>
	lists.map((list) => [...list].sort((a, b) => a - b))

describe(`findDifference`, () => {
	it.each(findDifferenceTests)(`$name`, ({ nums1, nums2, want }) => {
		const got = findDifference(nums1, nums2)
		expect(sortEach(got)).toEqual(sortEach(want))
	})
})
