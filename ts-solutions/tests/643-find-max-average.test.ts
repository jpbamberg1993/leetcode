import { findMaxAverage } from '../src/643-find-max-average'

type FindMaxAverageTest = {
	name: string
	nums: number[]
	k: number
	want: number
}

const findMaxAverageTests: FindMaxAverageTest[] = [
	{
		name: `best window is in the middle`,
		nums: [1, 12, -5, -6, 50, 3],
		k: 4,
		want: 12.75,
	},
	{ name: `window spans the whole array`, nums: [1, 2, 3, 4], k: 4, want: 2.5 },
	{ name: `window of one picks the max`, nums: [0, 4, 0, 3, 2], k: 1, want: 4 },
	{ name: `all negative numbers`, nums: [-1, -2, -3], k: 2, want: -1.5 },
	{
		name: `average is a repeating decimal`,
		nums: [1, 1, 2],
		k: 3,
		want: 4 / 3,
	},
	{ name: `single element`, nums: [5], k: 1, want: 5 },
]

describe(`findMaxAverage`, () => {
	it.each(findMaxAverageTests)(`$name => $want`, ({ nums, k, want }) => {
		expect(findMaxAverage(nums, k)).toBeCloseTo(want, 5)
	})
})
