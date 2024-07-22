import { findMaxAverage } from '../src/643-find-max-average'

type FindMaxAverageTest = {
	nums: number[]
	k: number
	want: number
}

const tests: FindMaxAverageTest[] = [
	{ nums: [1, 12, -5, -6, 50, 3], k: 4, want: 12.75 },
	{ nums: [5], k: 1, want: 5.0 },
	{ nums: [0, 4, 0, 3, 2], k: 1, want: 4.0 },
]

describe(`findMaxAverage`, () => {
	test.each(tests)(`findMaxAverage($nums, $k) => $want`, ({ nums, k, want }) =>
		expect(findMaxAverage(nums, k)).toEqual(want)
	)
})
