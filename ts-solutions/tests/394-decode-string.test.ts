import { decodeString } from '../src/394-decode-string'

type DecodeStringTest = {
	s: string
	want: string
}

const decodeStringTests: DecodeStringTest[] = [
	{ s: `3[a]2[bc]`, want: `aaabcbc` },
	{ s: `3[a2[c]]`, want: `accaccacc` },
	{ s: `2[abc]3[cd]ef`, want: `abcabccdcdcdef` },
	{
		s: `100[leetcode]`,
		want: `leetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcode`,
	},
]

describe(`decodeString`, () => {
	it.each(decodeStringTests)(`decodeString($s) => $want`, ({ s, want }) => {
		const got = decodeString(s)
		expect(got).toBe(want)
	})
})
