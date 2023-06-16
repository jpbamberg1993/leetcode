import { isIsomorphic } from '../src/is-isomorphic'

describe(`isIsomorphic`, function () {
	test(`Input s = "egg", t = "add" --> true`, function () {
		expect(isIsomorphic(`egg`, `add`)).toEqual(true)
	})

	test(`Input s = "foo", t = "bar" --> false`, function () {
		expect(isIsomorphic(`foo`, `bar`)).toEqual(false)
	})

	test(`Input s = "paper", t = "title" --> true`, function () {
		expect(isIsomorphic(`paper`, `title`)).toEqual(true)
	})

	test(`Input s = "badc", t = "baba" --> false`, function () {
		expect(isIsomorphic(`badc`, `baba`)).toEqual(false)
	})
})
