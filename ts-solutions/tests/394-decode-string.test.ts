import { decodeString } from '../src/394-decode-string'

type DecodeStringTest = {
	name: string
	s: string
	want: string
}

const decodeStringTests: DecodeStringTest[] = [
	{ name: `consecutive groups`, s: `3[a]2[bc]`, want: `aaabcbc` },
	{ name: `nested group`, s: `3[a2[c]]`, want: `accaccacc` },
	{
		name: `letters on both sides of a nested group`,
		s: `2[a2[b]c]`,
		want: `abbcabbc`,
	},
	{
		name: `letters after the last group`,
		s: `2[abc]3[cd]ef`,
		want: `abcabccdcdcdef`,
	},
	{
		name: `multi-digit repeat count`,
		s: `100[leetcode]`,
		want: `leetcode`.repeat(100),
	},
	{ name: `no groups`, s: `abc`, want: `abc` },
]

describe(`decodeString`, () => {
	it.each(decodeStringTests)(`$name`, ({ s, want }) => {
		expect(decodeString(s)).toBe(want)
	})
})
