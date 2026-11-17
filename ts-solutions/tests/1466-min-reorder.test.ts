import { minReorder } from '../src/1466-min-reorder'

type MinReorderTest = {
	name: string
	n: number
	connections: number[][]
	want: number
}

const minReorderTests: MinReorderTest[] = [
	{
		name: `mixed directions across two branches`,
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
		name: `alternating directions along a chain`,
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
		name: `every road already leads to city 0`,
		n: 3,
		connections: [
			[1, 0],
			[2, 0],
		],
		want: 0,
	},
	{
		name: `single road away from city 0`,
		n: 2,
		connections: [[0, 1]],
		want: 1,
	},
	{
		name: `chain pointing away from city 0`,
		n: 4,
		connections: [
			[0, 1],
			[1, 2],
			[2, 3],
		],
		want: 3,
	},
	{
		name: `star with every road leaving city 0`,
		n: 4,
		connections: [
			[0, 1],
			[0, 2],
			[0, 3],
		],
		want: 3,
	},
]

describe(`minReorder`, () => {
	it.each(minReorderTests)(`$name => $want`, ({ n, connections, want }) => {
		expect(minReorder(n, connections)).toBe(want)
	})
})
