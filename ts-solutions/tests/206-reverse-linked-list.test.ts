import { arrayToLinkedList } from '../utils/array-to-linked-list'
import { reverseList } from '../src/206-reverse-linked-list'

type ReverseListTest = {
	name: string
	list: number[]
	want: number[]
}

const reverseListTests: ReverseListTest[] = [
	{ name: `several nodes`, list: [1, 2, 3, 4, 5], want: [5, 4, 3, 2, 1] },
	{ name: `two nodes`, list: [1, 2], want: [2, 1] },
	{ name: `single node`, list: [1], want: [1] },
	{ name: `empty list`, list: [], want: [] },
]

describe(`reverseList`, () => {
	it.each(reverseListTests)(`$name => $want`, ({ list, want }) => {
		const got = reverseList(arrayToLinkedList(list))
		expect(got).toEqual(arrayToLinkedList(want))
	})
})
