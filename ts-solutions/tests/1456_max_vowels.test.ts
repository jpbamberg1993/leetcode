import { maxVowels } from '../src/1456_max_vowels'

type MaxVowelsTest = {
	name: string
	s: string
	k: number
	want: number
}

const maxVowelsTests: MaxVowelsTest[] = [
	{ name: `three vowels in a row`, s: `abciiidef`, k: 3, want: 3 },
	{ name: `every letter is a vowel`, s: `aeiou`, k: 2, want: 2 },
	{ name: `several windows tie`, s: `leetcode`, k: 3, want: 2 },
	{
		name: `best window comes after the first`,
		s: `weallloveyou`,
		k: 7,
		want: 4,
	},
	{ name: `window covers the whole string`, s: `hello`, k: 5, want: 2 },
	{ name: `window of size one`, s: `bcda`, k: 1, want: 1 },
	{ name: `no vowels at all`, s: `rhythms`, k: 4, want: 0 },
]

describe(`maxVowels`, () => {
	it.each(maxVowelsTests)(`$name => $want`, ({ s, k, want }) => {
		expect(maxVowels(s, k)).toBe(want)
	})
})
