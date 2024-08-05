import { largestAltitude } from '../src/1732-largest-altitude'

type LargestAltitudeTest = {
	gain: number[]
	want: number
}

const largestAltitudeTests: LargestAltitudeTest[] = [
	{
		gain: [-5, 1, 5, 0, -7],
		want: 1,
	},
	{
		gain: [-4, -3, -2, -1, 4, 3, 2],
		want: 0,
	},
]

describe(`largestAltitude`, () => {
	it.each(largestAltitudeTests)(
		`largestAltitude($gain) => $want`,
		({ gain, want }) => {
			expect(largestAltitude(gain)).toBe(want)
		}
	)
})
