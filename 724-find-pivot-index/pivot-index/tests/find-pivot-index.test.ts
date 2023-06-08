import { pivotIndex } from '../src/find-pivot-index'

describe(`pivotIndex`, function () {
	it(`is passed [1,7,3,6,5,6] and returns the index of 3`, function () {
		expect(pivotIndex([1, 7, 3, 6, 5, 6])).toBe(3)
	})

	it(`is passed [1,2,3] and returns -1`, function () {
		expect(pivotIndex([1, 2, 3])).toBe(-1)
	})

	it(`is passed [2,1,-1] and returns 0`, function () {
		expect(pivotIndex([2, 1, -1])).toBe(0)
	})
})
