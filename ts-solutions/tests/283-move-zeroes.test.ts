import { moveZeroes } from '../src/283-move-zeroes'

type MoveZeroesTest = {
	name: string
	nums: number[]
	want: number[]
}

const moveZeroesTests: MoveZeroesTest[] = [
	{
		name: `zeros spread through the array`,
		nums: [0, 1, 0, 3, 12],
		want: [1, 3, 12, 0, 0],
	},
	{
		name: `keeps the order of non-zero values`,
		nums: [4, 0, -2, 0, 5],
		want: [4, -2, 5, 0, 0],
	},
	{ name: `zeros already at the end`, nums: [1, 0, 0], want: [1, 0, 0] },
	{ name: `no zeros`, nums: [1, 2, 3], want: [1, 2, 3] },
	{ name: `all zeros`, nums: [0, 0, 0], want: [0, 0, 0] },
	{ name: `single zero`, nums: [0], want: [0] },
]

describe(`moveZeroes`, () => {
	it.each(moveZeroesTests)(`$name => $want`, ({ nums, want }) => {
		moveZeroes(nums)
		expect(nums).toEqual(want)
	})
})
