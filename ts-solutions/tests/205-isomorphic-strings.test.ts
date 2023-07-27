import { isIsomorphic } from '../src/205-isomorphic-strings'

describe(`isIsomorphic`, () => {
	it(`is passed s = "egg" and t = "add" => true`, () => {
		const response = isIsomorphic(`egg`, `add`)
		expect(response).toBe(true)
	})

	it(`is passed s = "foo" and t = "bar" => false`, () => {
		const response = isIsomorphic(`foo`, `bar`)
		expect(response).toBe(false)
	})

	it(`is passed s = "paper" and t = "title" => true`, () => {
		const response = isIsomorphic(`paper`, `title`)
		expect(response).toBe(true)
	})

	it(`is passed s = "badc" and t = "baba" => false`, () => {
		const response = isIsomorphic(`badc`, `baba`)
		expect(response).toBe(false)
	})
})
