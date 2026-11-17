import { longestOnes } from '../src/1004-longest-ones'

type LongestOnesTest = {
	name: string
	nums: number[]
	k: number
	want: number
}

const longestOnesTests: LongestOnesTest[] = [
	{
		name: `two flips extend the run of four to six`,
		nums: [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0],
		k: 2,
		want: 6,
	},
	{
		name: `three flips bridge several short runs`,
		nums: [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
		k: 3,
		want: 10,
	},
	{
		name: `no flips allowed returns the longest existing run`,
		nums: [1, 1, 0, 1, 1, 1, 0, 1],
		k: 0,
		want: 3,
	},
	{ name: `all ones need no flips`, nums: [1, 1, 1, 1], k: 2, want: 4 },
	{
		name: `enough flips to cover the whole array`,
		nums: [0, 0, 0, 1],
		k: 3,
		want: 4,
	},
	{ name: `all zeros with flips`, nums: [0, 0, 0, 0], k: 2, want: 2 },
	{ name: `all zeros without flips`, nums: [0, 0, 0], k: 0, want: 0 },
]

describe(`longestOnes`, () => {
	it.each(longestOnesTests)(`$name => $want`, ({ nums, k, want }) => {
		expect(longestOnes(nums, k)).toBe(want)
	})
})
