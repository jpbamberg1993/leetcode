import { mergeAlternately } from '../src/1768-merge-strings-alternatly'
describe(`mergeAlternately`, () => {
	it(`is passed 'abc', 'pqr' => 'apbqcr'`, () => {
		const result = mergeAlternately(`abc`, `pqr`)
		expect(result).toBe(`apbqcr`)
	})

	it(`is passed 'ab', 'pqrs' => 'apbqrs'`, () => {
		const result = mergeAlternately(`ab`, `pqrs`)
		expect(result).toBe(`apbqrs`)
	})

	it(`is passed 'abcd', 'pq' => 'apbqcd'`, () => {
		const result = mergeAlternately(`abcd`, `pq`)
		expect(result).toBe(`apbqcd`)
	})
})
