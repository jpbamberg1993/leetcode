import { mergeAlternately } from '../src/1768-merge-strings-alternatly'

type MergeAlternatelyTest = {
	name: string
	word1: string
	word2: string
	want: string
}

const mergeAlternatelyTests: MergeAlternatelyTest[] = [
	{ name: `equal lengths`, word1: `abc`, word2: `pqr`, want: `apbqcr` },
	{
		name: `rest of the longer word2 is appended`,
		word1: `ab`,
		word2: `pqrs`,
		want: `apbqrs`,
	},
	{
		name: `rest of the longer word1 is appended`,
		word1: `abcd`,
		word2: `pq`,
		want: `apbqcd`,
	},
	{ name: `single letters`, word1: `a`, word2: `z`, want: `az` },
]

describe(`mergeAlternately`, () => {
	it.each(mergeAlternatelyTests)(
		`$name => "$want"`,
		({ word1, word2, want }) => {
			expect(mergeAlternately(word1, word2)).toBe(want)
		}
	)
})
