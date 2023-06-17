import { isSubsequence } from '../src/is-subsequence'

describe(`isSubsequence`, function () {
	it(`Input s = "abc", t = "ahbgdc" --> true`, function () {
		expect(isSubsequence(`abc`, `ahbgdc`)).toEqual(true)
	})

	it(`Input s = "axc", t = "ahbgdc" --> false`, function () {
		expect(isSubsequence(`axc`, `ahbgdc`)).toEqual(false)
	})
})
