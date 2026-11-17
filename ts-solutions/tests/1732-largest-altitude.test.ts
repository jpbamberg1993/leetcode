import { largestAltitude } from '../src/1732-largest-altitude'

type LargestAltitudeTest = {
	name: string
	gain: number[]
	want: number
}

const largestAltitudeTests: LargestAltitudeTest[] = [
	{ name: `peaks partway through`, gain: [-5, 1, 5, 0, -7], want: 1 },
	{ name: `highest point is the end`, gain: [1, 2, 3], want: 6 },
	{
		name: `never climbs back above the start`,
		gain: [-4, -3, -2, -1, 4, 3, 2],
		want: 0,
	},
	{ name: `single climb`, gain: [4], want: 4 },
	{ name: `single descent`, gain: [-3], want: 0 },
]

describe(`largestAltitude`, () => {
	it.each(largestAltitudeTests)(`$name => $want`, ({ gain, want }) => {
		expect(largestAltitude(gain)).toBe(want)
	})
})
