import { moveZeroes } from '../src/283-move-zeroes'

type MoveZeroesTest = [nums: number[], answer: number[]]

const moveZeroesTests: MoveZeroesTest[] = [
	[
		[0, 1, 0, 3, 12],
		[1, 3, 12, 0, 0],
	],
	[[0], [0]],
]

describe(`moveZeroes`, () => {
	it.each(moveZeroesTests)(`nums = %j => %j`, (arg1, expected) => {
		moveZeroes(arg1)
		expect(arg1).toEqual(expected)
	})
})
