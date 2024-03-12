import { reverseWord } from '../src/151-reverse-words-in-a-string'

type ReverseWordTest = [string, string]

const reverseWordTests: ReverseWordTest[] = [
	[`the sky is blue`, `blue is sky the`],
	[`  hello world  `, `world hello`],
	[`a good   example`, `example good a`],
]

describe(`reverseWord`, () => {
	it.each(reverseWordTests)(`s = %s => %s`, (arg1, expected) => {
		expect(reverseWord(arg1)).toEqual(expected)
	})
})
