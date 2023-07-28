import { isSubsequence } from '../src/392-is-subsequence'

describe(`isSubsequence`, function () {
	it(`is passed s = "abc", t = "ahbgdc" => true`, () => {
		const result = isSubsequence(`abc`, `ahbgdc`)
		expect(result).toBe(true)
	})

	it(`is passed s = "axc", t = "ahbgdc" => false`, () => {
		const result = isSubsequence(`axc`, `ahbgdc`)
		expect(result).toBe(false)
	})
})
