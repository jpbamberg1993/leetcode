import { longestSubarray } from '../src/1493_longest_subarray'

type LongestSubarrayTest = {
	nums: number[]
	want: number
}

const tests: LongestSubarrayTest[] = [
	{ nums: [1, 1, 0, 1], want: 3 },
	{ nums: [0, 1, 1, 1, 0, 1, 1, 0, 1], want: 5 },
	{ nums: [1, 1, 1], want: 2 },
]

describe(`longestSubarray`, () => {
	test.each(tests)(`longestSubarray($nums) => $want`, ({ nums, want }) => {
		expect(longestSubarray(nums)).toEqual(want)
	})
})
