import { removeStars } from '../src/2390-remove-stars'

type RemoveStringsTest = {
	s: string
	want: string
}

const removeStringsTest: RemoveStringsTest[] = [
	{ s: `leet**cod*e`, want: `lecoe` },
	{ s: `erase*****`, want: `` },
]

describe(`removeStrings`, () => {
	it.each(removeStringsTest)(`removeStrings($s) => $want`, ({ s, want }) => {
		const got = removeStars(s)
		expect(got).toBe(want)
	})
})
