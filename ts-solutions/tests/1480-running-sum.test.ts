import { runningSum } from '../src/1480-running-sum'

describe(`runningSum`, () => {
	test(`is passed nums = [1,2,3,4] and returns [1,3,6,10]`, () => {
		const response = runningSum([1, 2, 3, 4])
		const expected = [1, 3, 6, 10]
		expect(response).toEqual(expected)
	})

	test(`is passed nums = [1,1,1,1,1] and retruns [1,2,3,4,5]`, () => {
		const response = runningSum([1, 1, 1, 1, 1])
		const expected = [1, 2, 3, 4, 5]
		expect(response).toEqual(expected)
	})

	test(`is passed nums = [3,1,2,10,1] and returns [3,4,6,16,17]`, () => {
		const response = runningSum([3, 1, 2, 10, 1])
		const expected = [3, 4, 6, 16, 17]
		expect(response).toEqual(expected)
	})
})
