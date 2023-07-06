import { arrayToLinkedList } from '../utils/array-to-linked-list'
import { mergeTwoLists } from '../src/21-merge-two-lists'

describe(`mergeTwoLists`, function () {
	it(`is passed list1 = [1,2,4], list2 = [1,3,4] => [1,1,2,3,4,4]`, function () {
		const list1 = arrayToLinkedList([1, 2, 4])
		const list2 = arrayToLinkedList([1, 3, 4])
		const expectedList = arrayToLinkedList([1, 1, 2, 3, 4, 4])

		const result = mergeTwoLists(list1, list2)

		expect(result).toEqual(expectedList)
	})

	it(`is passed list1 = [], list2 = [] => []`, function () {
		const list1 = arrayToLinkedList([])
		const list2 = arrayToLinkedList([])
		const expectedList = arrayToLinkedList([])

		const result = mergeTwoLists(list1, list2)

		expect(result).toEqual(expectedList)
	})

	it(`is passed list1 = [], list2 = [0] => [0]`, function () {
		const list1 = arrayToLinkedList([])
		const list2 = arrayToLinkedList([0])
		const expectedList = arrayToLinkedList([0])

		const result = mergeTwoLists(list1, list2)

		expect(result).toEqual(expectedList)
	})

	it(`is passed list1 = [5], list2 = [1,2,4] => [1,2,4,5]`, function () {
		const list1 = arrayToLinkedList([5])
		const list2 = arrayToLinkedList([1, 2, 4])
		const expectedList = arrayToLinkedList([1, 2, 4, 5])

		const result = mergeTwoLists(list1, list2)

		expect(result).toEqual(expectedList)
	})
})
