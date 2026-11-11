import { canVisitAllRooms } from '../src/841-can-visit-all-rooms'

const showGrid = (grid: number[][]) =>
	grid.map((row) => `  ` + row.join(` `)).join(`\n`)

function expectCanVisitAllRooms(rooms: number[][], want: boolean) {
	const got = canVisitAllRooms(rooms)
	try {
		expect(got).toBe(want)
	} catch (e) {
		if (e instanceof Error) {
			e.message = `\ncanVisitAllRooms:\n${showGrid}\n`
		}
		throw e
	}
}

describe(`canVisitAllRooms`, () => {
	it(`each room connected, 1 key per room => true`, () => {
		expectCanVisitAllRooms([[1], [2], [3], []], true)
	})

	it(`room 2 has no key => false`, () => {
		expectCanVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]], false)
	})
})
