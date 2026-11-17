import { isIsomorphic } from '../src/205-isomorphic-strings'

type IsIsomorphicTest = {
	name: string
	s: string
	t: string
	want: boolean
}

const isIsomorphicTests: IsIsomorphicTest[] = [
	{ name: `repeated letters map consistently`, s: `egg`, t: `add`, want: true },
	{
		name: `several letters with repeats`,
		s: `paper`,
		t: `title`,
		want: true,
	},
	{ name: `single letters`, s: `a`, t: `z`, want: true },
	{
		name: `one letter cannot map to two letters`,
		s: `foo`,
		t: `bar`,
		want: false,
	},
	{
		name: `two letters cannot map to the same letter`,
		s: `badc`,
		t: `baba`,
		want: false,
	},
	{
		name: `letter repeats in s but not in t`,
		s: `abca`,
		t: `zyxw`,
		want: false,
	},
]

describe(`isIsomorphic`, () => {
	it.each(isIsomorphicTests)(`$name => $want`, ({ s, t, want }) => {
		expect(isIsomorphic(s, t)).toBe(want)
	})
})
