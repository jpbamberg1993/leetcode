import { reverseWord } from '../src/151-reverse-words-in-a-string'

type ReverseWordTest = {
	name: string
	s: string
	want: string
}

const reverseWordTests: ReverseWordTest[] = [
	{
		name: `single spaces between words`,
		s: `the sky is blue`,
		want: `blue is sky the`,
	},
	{
		name: `leading and trailing spaces are dropped`,
		s: `  hello world  `,
		want: `world hello`,
	},
	{
		name: `repeated spaces collapse to one`,
		s: `a good   example`,
		want: `example good a`,
	},
	{ name: `single word`, s: `hello`, want: `hello` },
	{ name: `single word surrounded by spaces`, s: `  hi  `, want: `hi` },
]

describe(`reverseWord`, () => {
	it.each(reverseWordTests)(`$name => "$want"`, ({ s, want }) => {
		expect(reverseWord(s)).toBe(want)
	})
})
