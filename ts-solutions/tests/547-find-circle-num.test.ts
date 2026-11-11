import { findCircleNum } from '../src/547-find-circle-num'

const showGrid = (grid: number[][]) =>
	grid.map((row) => `  ` + row.join(` `)).join(`\n`)

const expectProvinces = (isConnected: number[][], want: number) => {
	const got = findCircleNum(isConnected)
	try {
		expect(got).toBe(want)
	} catch (err) {
		if (err instanceof Error)
			err.message += `\n\nisConnected:\n${showGrid(isConnected)}`
		throw err
	}
}

describe(`findCircleNum`, () => {
	it(`two cities connected, one on its own => 2`, () => {
		expectProvinces(
			[
				[1, 1, 0],
				[1, 1, 0],
				[0, 0, 1],
			],
			2
		)
	})

	it(`no connections => 3`, () => {
		expectProvinces(
			[
				[1, 0, 0],
				[0, 1, 0],
				[0, 0, 1],
			],
			3
		)
	})

	it(`single city => 1`, () => {
		expectProvinces([[1]], 1)
	})

	it(`every city directly connected => 1`, () => {
		expectProvinces(
			[
				[1, 1, 1],
				[1, 1, 1],
				[1, 1, 1],
			],
			1
		)
	})

	it(`chain 0-1-2 (0 and 2 only connected through 1) => 1`, () => {
		expectProvinces(
			[
				[1, 1, 0],
				[1, 1, 1],
				[0, 1, 1],
			],
			1
		)
	})

	it(`non-adjacent groups 0-2 and 1-3 => 2`, () => {
		expectProvinces(
			[
				[1, 0, 1, 0],
				[0, 1, 0, 1],
				[1, 0, 1, 0],
				[0, 1, 0, 1],
			],
			2
		)
	})
})
