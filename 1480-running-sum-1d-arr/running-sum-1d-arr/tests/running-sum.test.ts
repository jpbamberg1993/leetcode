import { getRunningSum } from '../src/get-running-sum'

describe('getRunningSum', function () {
	it('is passed [1,2,3,4] and returns [1,3,6,10]', function() {
		const arr = [1,2,3,4]
		const result = getRunningSum(arr)
		expect(result).toStrictEqual([1,3,6,10])
	})

	it('is passed [1,1,1,1,1] and returns [1,2,3,4,5]', function() {
		const arr = [1,1,1,1,1]
		const result = getRunningSum(arr)
		expect(result).toStrictEqual([1,2,3,4,5])
	})

	it('is passed [3,1,2,10,1] and returns [3,4,6,16,17]', function() {
		const arr = [3,1,2,10,1]
		const result = getRunningSum(arr)
		expect(result).toStrictEqual([3,4,6,16,17])
	})
})
