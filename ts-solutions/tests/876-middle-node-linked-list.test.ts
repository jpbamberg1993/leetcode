import { middleNode } from '../src/876-middle-node-linked-list'
import { arrayToLinkedList } from '../utils/array-to-linked-list'

describe(`middleNode`, () => {
	it(`is passed [1,2,3,4,5] => [3,4,5]`, () => {
		const head = arrayToLinkedList([1, 2, 3, 4, 5])
		const expectedResult = arrayToLinkedList([3, 4, 5])

		const result = middleNode(head)

		expect(result).toEqual(expectedResult)
	})

	it(`is passed [1,2,3,4,5,6] => [4,5,6]`, () => {
		const head = arrayToLinkedList([1, 2, 3, 4, 5, 6])
		const expectedResult = arrayToLinkedList([4, 5, 6])

		const result = middleNode(head)

		expect(result).toEqual(expectedResult)
	})
})
