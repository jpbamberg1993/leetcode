import { reverseVowels } from '../src/345-reverse-vowels-of-a-string'

type ReverseVowelsTest = {
	name: string
	s: string
	want: string
}

const reverseVowelsTests: ReverseVowelsTest[] = [
	{ name: `two vowels swap`, s: `hello`, want: `holle` },
	{ name: `several vowels reverse order`, s: `leetcode`, want: `leotcede` },
	{ name: `uppercase vowels count too`, s: `IceCreAm`, want: `AceCreIm` },
	{ name: `only vowels`, s: `aeiou`, want: `uoiea` },
	{ name: `no vowels`, s: `xyz`, want: `xyz` },
]

describe(`reverseVowels`, () => {
	it.each(reverseVowelsTests)(`$name => "$want"`, ({ s, want }) => {
		expect(reverseVowels(s)).toBe(want)
	})
})
