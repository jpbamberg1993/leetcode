import { maxArea } from '../src/11_container_most_water'

type MaxAreaTest = {
	height: number[]
	expected: number
}

const tests: MaxAreaTest[] = [
	{ height: [1, 8, 6, 2, 5, 4, 8, 3, 7], expected: 49 },
	{ height: [1, 1], expected: 1 },
	{ height: [2, 3, 4, 5, 18, 17, 6], expected: 17 },
]

describe(`maxArea`, () => {
	test.each(tests)(
		`maxArea($height) should return $expected`,
		({ height, expected }) => {
			expect(maxArea(height)).toStrictEqual(expected)
		}
	)
})
