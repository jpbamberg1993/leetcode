import { calcEquation } from '../src/399-calc-equation'

type CalcEquationTest = {
	equations: string[][]
	values: number[]
	queries: string[][]
	want: number[]
}

const calcEquationTests: CalcEquationTest[] = [
	{
		equations: [
			[`a`, `b`],
			[`b`, `c`],
		],
		values: [2.0, 3.0],
		queries: [
			[`a`, `c`],
			[`b`, `a`],
			[`a`, `e`],
			[`a`, `a`],
			[`x`, `x`],
		],
		want: [6.0, 0.5, -1.0, 1.0, -1.0],
	},
	{
		equations: [
			[`a`, `b`],
			[`b`, `c`],
			[`bc`, `cd`],
		],
		values: [1.5, 2.5, 5.0],
		queries: [
			[`a`, `c`],
			[`c`, `b`],
			[`bc`, `cd`],
			[`cd`, `bc`],
		],
		want: [3.75, 0.4, 5.0, 0.2],
	},
	{
		equations: [[`a`, `b`]],
		values: [0.5],
		queries: [
			[`a`, `b`],
			[`b`, `a`],
			[`a`, `c`],
			[`x`, `y`],
		],
		want: [0.5, 2.0, -1.0, -1.0],
	},
	{
		equations: [
			[`x1`, `x2`],
			[`x2`, `x3`],
			[`x3`, `x4`],
			[`x4`, `x5`],
		],
		values: [3.0, 4.0, 5.0, 6.0],
		queries: [
			[`x1`, `x5`],
			[`x5`, `x2`],
			[`x2`, `x4`],
			[`x2`, `x2`],
			[`x2`, `x9`],
			[`x9`, `x9`],
		],
		want: [360.0, 0.00833, 20.0, 1.0, -1.0, -1.0],
	},
	{
		equations: [
			[`x1`, `x2`],
			[`x2`, `x3`],
			[`x1`, `x4`],
			[`x2`, `x5`],
		],
		values: [3.0, 0.5, 3.4, 5.6],
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
		want: [1.13333, 16.8, 1.5, 1.0, 0.05952, 2.26667, 0.44118, -1.0, -1.0],
	},
	{
		equations: [
			[`a`, `b`],
			[`c`, `d`],
		],
		values: [1.0, 1.0],
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
		`calcEquation($equations, $values, $queries) => $want`,
		({ equations, values, queries, want }) => {
			const got = calcEquation(equations, values, queries)
			expect(got).toHaveLength(want.length)
			got.forEach((g, i) => expect(g).toBeCloseTo(want[i], 5))
		}
	)
})
