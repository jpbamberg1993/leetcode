import { arrayToLinkedList } from '../utils/array-to-linked-list'
import { reverseList } from '../src/206-reverse-linked-list'

describe(`reverseList`, function () {
	it(`is passed [1,2,3,4,5] => [5,4,3,2,1]`, function () {
		const initialList = arrayToLinkedList([1, 2, 3, 4, 5])
		const expectedResult = arrayToLinkedList([5, 4, 3, 2, 1])

		const result = reverseList(initialList)

		expect(result).toEqual(expectedResult)
	})

	it(`is passed [1,2] => [2,1]`, function () {
		const initialList = arrayToLinkedList([1, 2])
		const expectedResult = arrayToLinkedList([2, 1])

		const result = reverseList(initialList)

		expect(result).toEqual(expectedResult)
	})

	it(`is passed [] => []`, function () {
		const initialList = arrayToLinkedList([])
		const expectedResult = arrayToLinkedList([])

		const result = reverseList(initialList)

		expect(result).toEqual(expectedResult)
	})
})
