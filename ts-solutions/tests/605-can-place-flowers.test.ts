import { canPlaceFlowers } from '../src/605-can-place-flowers'

describe('canPlaceFlowers', () => {
	it('is passed flowerbed = [1,0,0,0,1], n = 1 and return true', () => {
		expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true)
	})

	it('is passed flowerbed = [1,0,0,0,1], n = 2 and return false', () => {
		expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false)
	})
})
