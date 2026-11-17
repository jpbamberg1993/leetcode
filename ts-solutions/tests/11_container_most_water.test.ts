import { maxArea } from '../src/11_container_most_water'

type MaxAreaTest = {
	name: string
	height: number[]
	want: number
}

const maxAreaTests: MaxAreaTest[] = [
	{
		name: `lines far apart beat the two tallest lines`,
		height: [1, 8, 6, 2, 5, 4, 8, 3, 7],
		want: 49,
	},
	{
		name: `adjacent tall lines beat distant short ones`,
		height: [2, 3, 4, 5, 18, 17, 6],
		want: 17,
	},
	{ name: `outer lines are the tallest`, height: [5, 1, 1, 1, 5], want: 20 },
	{ name: `strictly decreasing heights`, height: [5, 4, 3, 2, 1], want: 6 },
	{ name: `only two lines`, height: [1, 1], want: 1 },
	{ name: `zero-height lines hold no water`, height: [0, 0, 0], want: 0 },
]

describe(`maxArea`, () => {
	it.each(maxAreaTests)(`$name => $want`, ({ height, want }) => {
		expect(maxArea(height)).toBe(want)
	})
})
