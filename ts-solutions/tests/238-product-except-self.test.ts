import { productExceptSelf } from '../src/238-product-except-self'

type ProductExceptSelfTest = [number[], number[]]

const productExceptSelfTests: ProductExceptSelfTest[] = [
	[
		[1, 2, 3, 4],
		[24, 12, 8, 6],
	],
	[
		[-1, 1, 0, -3, 3],
		[0, 0, 9, 0, 0],
	],
]

describe(`productExceptSelf`, () => {
	it.each(productExceptSelfTests)(`nums = %s => %s`, (args1, expected) => {
		expect(JSON.parse(JSON.stringify(productExceptSelf(args1)))).toEqual(
			expected
		)
	})
})
