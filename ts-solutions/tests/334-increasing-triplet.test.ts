import { increasingTriplet } from '../src/334-increasing-triplet'

type IncreasingTripletTest = {
	name: string
	nums: number[]
	want: boolean
}

const increasingTripletTests: IncreasingTripletTest[] = [
	{ name: `strictly increasing`, nums: [1, 2, 3, 4, 5], want: true },
	{
		name: `triplet is not contiguous`,
		nums: [2, 1, 5, 0, 4, 6],
		want: true,
	},
	{
		name: `a new smallest value later still finds the triplet`,
		nums: [20, 100, 10, 12, 5, 13],
		want: true,
	},
	{ name: `strictly decreasing`, nums: [5, 4, 3, 2, 1], want: false },
	{ name: `equal values are not increasing`, nums: [1, 1, 1, 1], want: false },
	{
		name: `two increasing pairs that don't chain`,
		nums: [5, 6, 1, 2],
		want: false,
	},
	{ name: `fewer than three numbers`, nums: [1, 2], want: false },
]

describe(`increasingTriplet`, () => {
	it.each(increasingTripletTests)(`$name => $want`, ({ nums, want }) => {
		expect(increasingTriplet(nums)).toBe(want)
	})
})
