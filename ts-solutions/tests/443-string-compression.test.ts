import { compress } from '../src/443-string-compression'

type StringCompressTest = [string[], number]

const stringCompressionTests: StringCompressTest[] = [
	[[`a`, `a`, `b`, `b`, `c`, `c`, `c`], 6],
	[[`a`], 1],
	[[`a`, `b`, `b`, `b`, `b`, `b`, `b`, `b`, `b`, `b`, `b`, `b`, `b`], 4],
	[[`a`, `a`, `a`, `b`, `b`, `a`, `a`], 6],
]

describe(`compress`, () => {
	it.each(stringCompressionTests)(`chars = %s => %s`, (arg, expected) => {
		expect(compress(arg)).toEqual(expected)
	})
})
