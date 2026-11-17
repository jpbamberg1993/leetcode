import { compress } from '../src/443-string-compression'

type CompressTest = {
	name: string
	chars: string[]
	want: string
}

const compressTests: CompressTest[] = [
	{ name: `groups of two and three`, chars: [...`aabbccc`], want: `a2b2c3` },
	{
		name: `same letter in separate groups`,
		chars: [...`aaabbaa`],
		want: `a3b2a2`,
	},
	{
		name: `group of twelve uses two digits`,
		chars: [`a`, ...`b`.repeat(12)],
		want: `ab12`,
	},
	{ name: `group of exactly ten`, chars: [...`a`.repeat(10)], want: `a10` },
	{ name: `no repeats stay as they are`, chars: [...`abc`], want: `abc` },
	{ name: `single character`, chars: [`a`], want: `a` },
]

describe(`compress`, () => {
	it.each(compressTests)(`$name => "$want"`, ({ chars, want }) => {
		const length = compress(chars)
		expect(length).toBe(want.length)
		expect(chars.slice(0, length).join(``)).toBe(want)
	})
})
