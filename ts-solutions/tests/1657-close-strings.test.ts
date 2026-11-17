import { closeStrings } from '../src/1657-close-strings'

type CloseStringsTest = {
	name: string
	word1: string
	word2: string
	want: boolean
}

const closeStringsTests: CloseStringsTest[] = [
	{ name: `same letters reordered`, word1: `abc`, word2: `bca`, want: true },
	{
		name: `letter counts swapped between letters`,
		word1: `cabbba`,
		word2: `abbccc`,
		want: true,
	},
	{ name: `different lengths`, word1: `a`, word2: `aa`, want: false },
	{
		name: `same counts but a letter is missing`,
		word1: `abc`,
		word2: `abd`,
		want: false,
	},
	{
		name: `same letters but different counts`,
		word1: `aabb`,
		word2: `abbb`,
		want: false,
	},
]

describe(`closeStrings`, () => {
	it.each(closeStringsTests)(`$name => $want`, ({ word1, word2, want }) => {
		expect(closeStrings(word1, word2)).toBe(want)
	})
})
