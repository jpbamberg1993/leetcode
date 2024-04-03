import { increasingTriplet } from '../src/334-increasing-triplet'

type IncreasingTripletTest = [number[], boolean]

const increasingTripletTests: IncreasingTripletTest[] = [
	[[1, 2, 3, 4, 5], true],
	[[5, 4, 3, 2, 1], false],
	[[2, 1, 5, 0, 4, 6], true],
]

describe(`increasingTriplet`, () => {
	it.each(increasingTripletTests)(`nums = %s => %s`, (arg, expected) => {
		expect(increasingTriplet(arg)).toEqual(expected)
	})
})
