import { gcdOfStrings } from '../src/1071-greatest-common-divisor-of-strings'

describe('gcdOfStrings', () => {
	it('is passed str1 = "ABCABC", str2 = "ABC" => "ABC"', () => {
		expect(gcdOfStrings('ABCABC', 'ABC')).toBe('ABC')
	})

	it('is passed str1 = "ABABAB", str2 = "ABAB" => "AB"', () => {
		expect(gcdOfStrings('ABABAB', 'ABAB')).toBe('AB')
	})

	it('str1 = "LEET", str2 = "CODE" => ""', () => {
		expect(gcdOfStrings('LEET', 'CODE')).toBe('')
	})
})
