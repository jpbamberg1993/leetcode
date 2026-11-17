import { pivotIndex } from '../src/724-pivot-index'

type PivotIndexTest = {
	name: string
	nums: number[]
	want: number
}

const pivotIndexTests: PivotIndexTest[] = [
	{ name: `pivot in the middle`, nums: [1, 7, 3, 6, 5, 6], want: 3 },
	{ name: `pivot at the start: left sum is 0`, nums: [2, 1, -1], want: 0 },
	{ name: `pivot at the end: right sum is 0`, nums: [-1, 1, 2], want: 2 },
	{ name: `several pivots: leftmost wins`, nums: [0, 0, 0], want: 0 },
	{ name: `single element`, nums: [5], want: 0 },
	{ name: `no pivot`, nums: [1, 2, 3], want: -1 },
]

describe(`pivotIndex`, () => {
	it.each(pivotIndexTests)(`$name => $want`, ({ nums, want }) => {
		expect(pivotIndex(nums)).toBe(want)
	})
})
