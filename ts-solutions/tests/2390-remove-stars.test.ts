import { removeStars } from '../src/2390-remove-stars'

type RemoveStarsTest = {
	name: string
	s: string
	want: string
}

const removeStarsTests: RemoveStarsTest[] = [
	{
		name: `each star removes the closest letter to its left`,
		s: `leet**cod*e`,
		want: `lecoe`,
	},
	{ name: `a star removes only one letter`, s: `ab*c`, want: `ac` },
	{ name: `stars remove every letter`, s: `erase*****`, want: `` },
	{ name: `no stars`, s: `abc`, want: `abc` },
]

describe(`removeStars`, () => {
	it.each(removeStarsTests)(`$name => "$want"`, ({ s, want }) => {
		expect(removeStars(s)).toBe(want)
	})
})
