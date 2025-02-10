import { equalPairs } from '../src/2352-equal-pairs'

type EqualPairsTest = {
	grid: number[][]
	want: number
}

export const equalPairsTests: EqualPairsTest[] = [
	{
		grid: [
			[3, 2, 1],
			[1, 7, 6],
			[2, 7, 7],
		],
		want: 1,
	},
	{
		grid: [
			[3, 1, 2, 2],
			[1, 4, 4, 5],
			[2, 4, 2, 2],
			[2, 4, 2, 2],
		],
		want: 3,
	},
]

if (typeof describe !== `undefined`) {
	describe(`equalPairs`, () => {
		it.each(equalPairsTests)(`equalPairs`, ({ grid, want }) => {
			const got = equalPairs(grid)
			expect(got).toBe(want)
		})
	})
}
