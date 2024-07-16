import { kidsWithCandies } from '../src/1431-kids-with-candies'

type KidsWithCandiesTest = [number[], number, boolean[]]

const kidsWithCandiesTests: KidsWithCandiesTest[] = [
	[[2, 3, 5, 1, 3], 3, [true, true, true, false, true]],
	[[4, 2, 1, 1, 2], 1, [true, false, false, false, false]],
	[[12, 1, 12], 10, [true, false, true]],
]

describe(`kidsWithCandies`, () => {
	it.each(kidsWithCandiesTests)(
		`candies = %s, extraCandies = %s => %s`,
		(arg1, arg2, expected) => {
			expect(kidsWithCandies(arg1, arg2)).toStrictEqual(expected)
		}
	)
})
