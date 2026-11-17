import { maxOperations } from '../src/1679-max-operations'

type MaxOperationsTest = {
	name: string
	nums: number[]
	k: number
	want: number
}

const maxOperationsTests: MaxOperationsTest[] = [
	{ name: `two separate pairs`, nums: [1, 2, 3, 4], k: 5, want: 2 },
	{
		name: `each number is used at most once`,
		nums: [3, 1, 3, 4, 3],
		k: 6,
		want: 1,
	},
	{
		name: `duplicate values form several pairs`,
		nums: [2, 2, 2, 2],
		k: 4,
		want: 2,
	},
	{ name: `a number cannot pair with itself`, nums: [5], k: 10, want: 0 },
	{ name: `no pair adds up to k`, nums: [1, 1, 1], k: 5, want: 0 },
]

describe(`maxOperations`, () => {
	it.each(maxOperationsTests)(`$name => $want`, ({ nums, k, want }) => {
		expect(maxOperations(nums, k)).toBe(want)
	})
})
