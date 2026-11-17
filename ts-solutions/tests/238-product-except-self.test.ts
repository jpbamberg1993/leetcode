import { productExceptSelf } from '../src/238-product-except-self'

type ProductExceptSelfTest = {
	name: string
	nums: number[]
	want: number[]
}

const productExceptSelfTests: ProductExceptSelfTest[] = [
	{ name: `positive numbers`, nums: [1, 2, 3, 4], want: [24, 12, 8, 6] },
	{ name: `negative numbers`, nums: [-1, -2, -3], want: [6, 3, 2] },
	{ name: `two numbers swap`, nums: [2, 3], want: [3, 2] },
	{
		name: `one zero: only its own slot is non-zero`,
		nums: [-1, 1, 0, -3, 3],
		want: [0, 0, 9, 0, 0],
	},
	{ name: `two zeros: every slot is zero`, nums: [0, 2, 0], want: [0, 0, 0] },
]

const withoutNegativeZero = (nums: number[]) =>
	nums.map((n) => (n === 0 ? 0 : n))

describe(`productExceptSelf`, () => {
	it.each(productExceptSelfTests)(`$name => $want`, ({ nums, want }) => {
		expect(withoutNegativeZero(productExceptSelf(nums))).toEqual(want)
	})
})
