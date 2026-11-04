import { minReorder } from '../src/1466-min-reorder'

type MinReorderTest = {
	n: number
	connections: number[][]
	want: number
}

const minReorderTests: MinReorderTest[] = [
	{
		n: 6,
		connections: [
			[0, 1],
			[1, 3],
			[2, 3],
			[4, 0],
			[4, 5],
		],
		want: 3,
	},
	{
		n: 5,
		connections: [
			[1, 0],
			[1, 2],
			[3, 2],
			[3, 4],
		],
		want: 2,
	},
	{
		n: 3,
		connections: [
			[1, 0],
			[2, 0],
		],
		want: 0,
	},
]

describe(`minReorder`, () => {
	it.each(minReorderTests)(`minReorder %j`, ({ n, connections, want }) => {
		expect(minReorder(n, connections)).toBe(want)
	})
})
