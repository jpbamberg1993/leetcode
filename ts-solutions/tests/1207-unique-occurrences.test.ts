import { uniqueOccurrences } from '../src/1207-unique-occurrences'

type UniqueOccurrencesTest = {
	arr: number[]
	want: boolean
}

const uniqueOccurrencesTests: UniqueOccurrencesTest[] = [
	{ arr: [1, 2, 2, 1, 1, 3], want: true },
	{ arr: [1, 2], want: false },
	{ arr: [-3, 0, 1, -3, 1, 1, 1, -3, 10, 0], want: true },
]

describe(`uniqueOccurrences`, () => {
	test.each(uniqueOccurrencesTests)(
		`uniqueOccurrences($arr) => $want`,
		({ arr, want }) => {
			expect(uniqueOccurrences(arr)).toBe(want)
		}
	)
})
