import { uniqueOccurrences } from '../src/1207-unique-occurrences'

type UniqueOccurrencesTest = {
	name: string
	arr: number[]
	want: boolean
}

const uniqueOccurrencesTests: UniqueOccurrencesTest[] = [
	{ name: `counts of 3, 2 and 1`, arr: [1, 2, 2, 1, 1, 3], want: true },
	{
		name: `negative and zero values`,
		arr: [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0],
		want: true,
	},
	{ name: `single value`, arr: [5], want: true },
	{ name: `one value repeated`, arr: [7, 7, 7], want: true },
	{ name: `two values each appear once`, arr: [1, 2], want: false },
	{
		name: `two of three values share a count`,
		arr: [1, 1, 2, 2, 3],
		want: false,
	},
]

describe(`uniqueOccurrences`, () => {
	it.each(uniqueOccurrencesTests)(`$name => $want`, ({ arr, want }) => {
		expect(uniqueOccurrences(arr)).toBe(want)
	})
})
