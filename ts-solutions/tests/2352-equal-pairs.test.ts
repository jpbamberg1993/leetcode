import { equalPairs } from '../src/2352-equal-pairs'

type EqualPairsTest = {
	name: string
	grid: number[][]
	want: number
}

export const equalPairsTests: EqualPairsTest[] = [
	{
		name: `one row matches one column`,
		grid: [
			[3, 2, 1],
			[1, 7, 6],
			[2, 7, 7],
		],
		want: 1,
	},
	{
		name: `duplicate rows each match the same column`,
		grid: [
			[3, 1, 2, 2],
			[1, 4, 4, 5],
			[2, 4, 2, 2],
			[2, 4, 2, 2],
		],
		want: 3,
	},
	{
		name: `symmetric grid: each row matches its own column`,
		grid: [
			[1, 2],
			[2, 1],
		],
		want: 2,
	},
	{
		name: `every row matches every column`,
		grid: [
			[1, 1],
			[1, 1],
		],
		want: 4,
	},
	{
		name: `no row matches any column`,
		grid: [
			[1, 2],
			[3, 4],
		],
		want: 0,
	},
	{ name: `single cell`, grid: [[5]], want: 1 },
]

if (typeof describe !== `undefined`) {
	describe(`equalPairs`, () => {
		it.each(equalPairsTests)(`$name => $want`, ({ grid, want }) => {
			expect(equalPairs(grid)).toBe(want)
		})
	})
}
