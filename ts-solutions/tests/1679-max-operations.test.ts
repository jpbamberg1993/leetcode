import { maxOperations } from '../src/1679-max-operations'

type MaxOperationsTest = {
	nums: number[]
	k: number
	want: number
}

const tests: MaxOperationsTest[] = [
	{ nums: [1, 2, 3, 4], k: 5, want: 2 },
	{ nums: [3, 1, 3, 4, 3], k: 6, want: 1 },
]

describe(`maxOperations`, () => {
	test.each(tests)(`maxOperations($nums, $k) => $want`, ({ nums, k, want }) =>
		expect(maxOperations(nums, k)).toEqual(want)
	)
})
