import { runningSum } from '../src/1480-running-sum'

type RunningSumTest = {
	name: string
	nums: number[]
	want: number[]
}

const runningSumTests: RunningSumTest[] = [
	{ name: `counting up`, nums: [1, 2, 3, 4], want: [1, 3, 6, 10] },
	{ name: `all ones`, nums: [1, 1, 1, 1, 1], want: [1, 2, 3, 4, 5] },
	{ name: `uneven values`, nums: [3, 1, 2, 10, 1], want: [3, 4, 6, 16, 17] },
	{ name: `negatives bring the sum down`, nums: [5, -2, -3], want: [5, 3, 0] },
	{ name: `single element`, nums: [7], want: [7] },
]

describe(`runningSum`, () => {
	it.each(runningSumTests)(`$name => $want`, ({ nums, want }) => {
		expect(runningSum(nums)).toEqual(want)
	})
})
