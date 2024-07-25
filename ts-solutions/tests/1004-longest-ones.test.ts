import { longestOnes } from '../src/1004-longest-ones'

type LongestOnesTest = {
	nums: number[]
	k: number
	want: number
}

const tests: LongestOnesTest[] = [
	{ nums: [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k: 2, want: 6 },
	{
		nums: [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
		k: 3,
		want: 10,
	},
]

describe(`longestOnes`, () => {
	test.each(tests)(`longestOnes($nums, $k) => $want`, ({ nums, k, want }) => {
		expect(longestOnes(nums, k)).toEqual(want)
	})
})
