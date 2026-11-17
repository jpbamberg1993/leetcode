import { canPlaceFlowers } from '../src/605-can-place-flowers'

type CanPlaceFlowersTest = {
	name: string
	flowerbed: number[]
	n: number
	want: boolean
}

const canPlaceFlowersTests: CanPlaceFlowersTest[] = [
	{
		name: `room for one between two flowers`,
		flowerbed: [1, 0, 0, 0, 1],
		n: 1,
		want: true,
	},
	{
		name: `empty bed fits a flower in every other plot`,
		flowerbed: [0, 0, 0, 0, 0],
		n: 3,
		want: true,
	},
	{ name: `left edge counts as empty`, flowerbed: [0, 0, 1], n: 1, want: true },
	{
		name: `right edge counts as empty`,
		flowerbed: [1, 0, 0],
		n: 1,
		want: true,
	},
	{ name: `single empty plot`, flowerbed: [0], n: 1, want: true },
	{
		name: `planting nothing always works`,
		flowerbed: [1, 0, 1],
		n: 0,
		want: true,
	},
	{
		name: `not enough room for two`,
		flowerbed: [1, 0, 0, 0, 1],
		n: 2,
		want: false,
	},
	{
		name: `gap of one is not enough`,
		flowerbed: [1, 0, 1],
		n: 1,
		want: false,
	},
	{
		name: `two empty plots only fit one flower`,
		flowerbed: [0, 0],
		n: 2,
		want: false,
	},
]

describe(`canPlaceFlowers`, () => {
	it.each(canPlaceFlowersTests)(`$name => $want`, ({ flowerbed, n, want }) => {
		expect(canPlaceFlowers(flowerbed, n)).toBe(want)
	})
})
