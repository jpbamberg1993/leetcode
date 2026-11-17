import { canVisitAllRooms } from '../src/841-can-visit-all-rooms'

const showRooms = (rooms: number[][]) =>
	rooms.map((keys, room) => `  room ${room}: [${keys.join(`, `)}]`).join(`\n`)

function expectCanVisitAllRooms(rooms: number[][], want: boolean) {
	const got = canVisitAllRooms(rooms)
	try {
		expect(got).toBe(want)
	} catch (e) {
		if (e instanceof Error) {
			e.message += `\n\nrooms:\n${showRooms(rooms)}`
		}
		throw e
	}
}

describe(`canVisitAllRooms`, () => {
	it(`each room holds the key to the next => true`, () => {
		expectCanVisitAllRooms([[1], [2], [3], []], true)
	})

	it(`keys are found out of index order => true`, () => {
		expectCanVisitAllRooms([[2], [], [1]], true)
	})

	it(`every room holds every key => true`, () => {
		expectCanVisitAllRooms(
			[
				[1, 2],
				[0, 2],
				[0, 1],
			],
			true
		)
	})

	it(`key to room 2 is locked inside room 2 => false`, () => {
		expectCanVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]], false)
	})

	it(`rooms 0 and 1 only hold each other's keys => false`, () => {
		expectCanVisitAllRooms([[1], [0], []], false)
	})

	it(`room 0 has no keys => false`, () => {
		expectCanVisitAllRooms([[], [0]], false)
	})
})
