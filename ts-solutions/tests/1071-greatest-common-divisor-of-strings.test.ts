import { gcdOfStrings } from '../src/1071-greatest-common-divisor-of-strings'

type GcdOfStringsTest = {
	name: string
	str1: string
	str2: string
	want: string
}

const gcdOfStringsTests: GcdOfStringsTest[] = [
	{
		name: `str2 repeats to form str1`,
		str1: `ABCABC`,
		str2: `ABC`,
		want: `ABC`,
	},
	{
		name: `divisor is shorter than both strings`,
		str1: `ABABAB`,
		str2: `ABAB`,
		want: `AB`,
	},
	{
		name: `divisor is longer than the repeating pattern`,
		str1: `ABABABAB`,
		str2: `ABAB`,
		want: `ABAB`,
	},
	{
		name: `coprime lengths of one repeated letter`,
		str1: `AAAAA`,
		str2: `AAA`,
		want: `A`,
	},
	{ name: `identical strings`, str1: `ABC`, str2: `ABC`, want: `ABC` },
	{ name: `no shared letters`, str1: `LEET`, str2: `CODE`, want: `` },
	{
		name: `str2 is a prefix but does not divide str1`,
		str1: `ABCDEF`,
		str2: `ABC`,
		want: ``,
	},
]

describe(`gcdOfStrings`, () => {
	it.each(gcdOfStringsTests)(`$name => "$want"`, ({ str1, str2, want }) => {
		expect(gcdOfStrings(str1, str2)).toBe(want)
	})
})
