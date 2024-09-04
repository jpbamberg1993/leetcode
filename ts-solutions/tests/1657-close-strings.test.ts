import { closeStrings } from '../src/1657-close-strings'

type CloseStringsTest = {
	word1: string
	word2: string
	want: boolean
}

const closeStringsTest: CloseStringsTest[] = [
	{ word1: `abc`, word2: `bca`, want: true },
	{ word1: `a`, word2: `aa`, want: false },
	{ word1: `cabbba`, word2: `abbccc`, want: true },
]

describe(`closeStrings`, () => {
	test.each(closeStringsTest)(
		`closeStrings($word1, $word2) => $want`,
		({ word1, word2, want }) => {
			expect(closeStrings(word1, word2)).toBe(want)
		}
	)
})
