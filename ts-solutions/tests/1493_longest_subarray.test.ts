import { longestSubarray } from '../src/1493_longest_subarray'

type LongestSubarrayTest = {
	name: string
	nums: number[]
	want: number
}

const longestSubarrayTests: LongestSubarrayTest[] = [
	{ name: `deleting the zero joins two runs`, nums: [1, 1, 0, 1], want: 3 },
	{
		name: `best join is between the runs of three and two`,
		nums: [0, 1, 1, 1, 0, 1, 1, 0, 1],
		want: 5,
	},
	{
		name: `two zeros in a row cannot be bridged`,
		nums: [1, 1, 0, 0, 1, 1, 1],
		want: 3,
	},
	{ name: `no zeros: one 1 must still be deleted`, nums: [1, 1, 1], want: 2 },
	{ name: `single 1`, nums: [1], want: 0 },
	{ name: `all zeros`, nums: [0, 0, 0], want: 0 },
]

describe(`longestSubarray`, () => {
	it.each(longestSubarrayTests)(`$name => $want`, ({ nums, want }) => {
		expect(longestSubarray(nums)).toBe(want)
	})
})
