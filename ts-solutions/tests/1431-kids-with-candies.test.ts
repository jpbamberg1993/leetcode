import { kidsWithCandies } from '../src/1431-kids-with-candies'

type KidsWithCandiesTest = {
	name: string
	candies: number[]
	extraCandies: number
	want: boolean[]
}

const kidsWithCandiesTests: KidsWithCandiesTest[] = [
	{
		name: `extras lift everyone except the smallest pile`,
		candies: [2, 3, 5, 1, 3],
		extraCandies: 3,
		want: [true, true, true, false, true],
	},
	{
		name: `one extra is only enough for the current leader`,
		candies: [4, 2, 1, 1, 2],
		extraCandies: 1,
		want: [true, false, false, false, false],
	},
	{
		name: `tied leaders both stay greatest`,
		candies: [12, 1, 12],
		extraCandies: 10,
		want: [true, false, true],
	},
	{
		name: `exactly matching the leader counts as greatest`,
		candies: [1, 3, 2, 3],
		extraCandies: 1,
		want: [false, true, true, true],
	},
	{
		name: `all kids start equal`,
		candies: [4, 4, 4],
		extraCandies: 1,
		want: [true, true, true],
	},
]

describe(`kidsWithCandies`, () => {
	it.each(kidsWithCandiesTests)(
		`$name => $want`,
		({ candies, extraCandies, want }) => {
			expect(kidsWithCandies(candies, extraCandies)).toEqual(want)
		}
	)
})
