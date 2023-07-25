import { pivotIndex } from '../src/724-pivot-index'

describe(`pivotIndex`, () => {
	it(`is passed nums = [1,7,3,6,5,6] and returns 3`, () => {
		const result = pivotIndex([1, 7, 3, 6, 5, 6])
		const expected = 3
		expect(result).toBe(expected)
	})

	it(`is passed nums = [1,2,3] and returns -1`, () => {
		const result = pivotIndex([1, 2, 3])
		const expected = -1
		expect(result).toBe(expected)
	})

	it(`is passed nums = [2,1,-1] and returns 3`, () => {
		const result = pivotIndex([2, 1, -1])
		const expected = 0
		expect(result).toBe(expected)
	})
})
