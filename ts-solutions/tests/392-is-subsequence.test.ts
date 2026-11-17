import { isSubsequence } from '../src/392-is-subsequence'

type IsSubsequenceTest = {
	name: string
	s: string
	t: string
	want: boolean
}

const isSubsequenceTests: IsSubsequenceTest[] = [
	{
		name: `letters appear in order with gaps`,
		s: `abc`,
		t: `ahbgdc`,
		want: true,
	},
	{ name: `s equals t`, s: `abc`, t: `abc`, want: true },
	{ name: `empty s is always a subsequence`, s: ``, t: `ahbgdc`, want: true },
	{ name: `a letter is missing from t`, s: `axc`, t: `ahbgdc`, want: false },
	{ name: `letters present but out of order`, s: `acb`, t: `abc`, want: false },
	{
		name: `repeated letter must appear twice in t`,
		s: `aa`,
		t: `abc`,
		want: false,
	},
	{ name: `empty t contains nothing`, s: `a`, t: ``, want: false },
]

describe(`isSubsequence`, () => {
	it.each(isSubsequenceTests)(`$name => $want`, ({ s, t, want }) => {
		expect(isSubsequence(s, t)).toBe(want)
	})
})
