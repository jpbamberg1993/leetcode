import { maxVowels } from '../src/1456_max_vowels'

type MaxVowelsTest = {
	s: string
	k: number
	want: number
}

const tests: MaxVowelsTest[] = [
	{ s: `abciiidef`, k: 3, want: 3 },
	{ s: `aeiou`, k: 2, want: 2 },
	{ s: `leetcode`, k: 3, want: 2 },
]

describe(`maxVowels`, () => {
	test.each(tests)(`maxVowels($s, $k) => $want`, ({ s, k, want }) => {
		expect(maxVowels(s, k)).toEqual(want)
	})
})
