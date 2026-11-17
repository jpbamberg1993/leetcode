import { arrayToLinkedList } from '../utils/array-to-linked-list'
import { mergeTwoLists } from '../src/21-merge-two-lists'

type MergeTwoListsTest = {
	name: string
	list1: number[]
	list2: number[]
	want: number[]
}

const mergeTwoListsTests: MergeTwoListsTest[] = [
	{
		name: `interleaved values with duplicates`,
		list1: [1, 2, 4],
		list2: [1, 3, 4],
		want: [1, 1, 2, 3, 4, 4],
	},
	{
		name: `list1 comes entirely before list2`,
		list1: [1, 2],
		list2: [3, 4],
		want: [1, 2, 3, 4],
	},
	{
		name: `list1 comes entirely after list2`,
		list1: [5],
		list2: [1, 2, 4],
		want: [1, 2, 4, 5],
	},
	{ name: `list1 is empty`, list1: [], list2: [0], want: [0] },
	{ name: `list2 is empty`, list1: [1, 2], list2: [], want: [1, 2] },
	{ name: `both lists are empty`, list1: [], list2: [], want: [] },
]

describe(`mergeTwoLists`, () => {
	it.each(mergeTwoListsTests)(`$name => $want`, ({ list1, list2, want }) => {
		const got = mergeTwoLists(
			arrayToLinkedList(list1),
			arrayToLinkedList(list2)
		)
		expect(got).toEqual(arrayToLinkedList(want))
	})
})
