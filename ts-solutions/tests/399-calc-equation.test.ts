import { calcEquation } from '../src/399-calc-equation'

type CalcEquationTest = {
	name: string
	equations: string[][]
	values: number[]
	queries: string[][]
	want: number[]
}

const calcEquationTests: CalcEquationTest[] = [
	{
		name: `chain a/b, b/c: forward, inverse, unknown and self queries`,
		equations: [
			[`a`, `b`],
			[`b`, `c`],
		],
		values: [2, 3],
		queries: [
			[`a`, `c`],
			[`b`, `a`],
			[`a`, `e`],
			[`a`, `a`],
			[`x`, `x`],
		],
		want: [2 * 3, 1 / 2, -1, 1, -1],
	},
	{
		name: `multi-letter variable names`,
		equations: [
			[`a`, `b`],
			[`b`, `c`],
			[`bc`, `cd`],
		],
		values: [1.5, 2.5, 5],
		queries: [
			[`a`, `c`],
			[`c`, `b`],
			[`bc`, `cd`],
			[`cd`, `bc`],
		],
		want: [1.5 * 2.5, 1 / 2.5, 5, 1 / 5],
	},
	{
		name: `single equation`,
		equations: [[`a`, `b`]],
		values: [0.5],
		queries: [
			[`a`, `b`],
			[`b`, `a`],
			[`a`, `c`],
			[`x`, `y`],
		],
		want: [0.5, 1 / 0.5, -1, -1],
	},
	{
		name: `long chain x1/x2 … x4/x5`,
		equations: [
			[`x1`, `x2`],
			[`x2`, `x3`],
			[`x3`, `x4`],
			[`x4`, `x5`],
		],
		values: [3, 4, 5, 6],
		queries: [
			[`x1`, `x5`],
			[`x5`, `x2`],
			[`x2`, `x4`],
			[`x2`, `x2`],
			[`x2`, `x9`],
			[`x9`, `x9`],
		],
		want: [3 * 4 * 5 * 6, 1 / (4 * 5 * 6), 4 * 5, 1, -1, -1],
	},
	{
		name: `branching graph: paths go up to x1 and back down`,
		equations: [
			[`x1`, `x2`],
			[`x2`, `x3`],
			[`x1`, `x4`],
			[`x2`, `x5`],
		],
		values: [3, 0.5, 3.4, 5.6],
		queries: [
			[`x2`, `x4`],
			[`x1`, `x5`],
			[`x1`, `x3`],
			[`x5`, `x5`],
			[`x5`, `x1`],
			[`x3`, `x4`],
			[`x4`, `x3`],
			[`x6`, `x6`],
			[`x0`, `x0`],
		],
		want: [
			3.4 / 3,
			3 * 5.6,
			3 * 0.5,
			1,
			1 / (3 * 5.6),
			3.4 / (3 * 0.5),
			(3 * 0.5) / 3.4,
			-1,
			-1,
		],
	},
	{
		name: `two disconnected groups`,
		equations: [
			[`a`, `b`],
			[`c`, `d`],
		],
		values: [1, 1],
		queries: [
			[`a`, `c`],
			[`b`, `d`],
			[`b`, `a`],
			[`d`, `c`],
		],
		want: [-1, -1, 1, 1],
	},
]

describe(`calcEquation`, () => {
	it.each(calcEquationTests)(
		`$name`,
		({ equations, values, queries, want }) => {
			const got = calcEquation(equations, values, queries)
			expect(got).toHaveLength(want.length)
			got.forEach((g, i) => expect(g).toBeCloseTo(want[i], 5))
		}
	)
})
