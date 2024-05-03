import { reverseVowels } from '../src/345-reverse-vowels-of-a-string'

describe(`reverseVowels`, () => {
	it(`is passed s = "hello" => "holle"`, () => {
		expect(reverseVowels(`hello`)).toBe(`holle`)
	})
	it(`is passed s = "leetcode" => "leotcede"`, () => {
		expect(reverseVowels(`leetcode`)).toBe(`leotcede`)
	})
})
