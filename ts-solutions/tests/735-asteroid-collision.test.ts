import { asteroidCollision } from '../src/735-asteroid-collision'

type AsteroidCollisionTest = {
	asteroids: number[]
	want: number[]
}

const asteroidCollisionTests: AsteroidCollisionTest[] = [
	{ asteroids: [5, 10, -5], want: [5, 10] },
	{ asteroids: [8, -8], want: [] },
	{ asteroids: [10, 2, -5], want: [10] },
	{ asteroids: [-2, -2, 1, -2], want: [-2, -2, -2] },
	{ asteroids: [-2, 1, 1, -2], want: [-2, -2] },
]

describe(`asteroidCollision`, () => {
	it.each(asteroidCollisionTests)(
		`asteroidCollision($asteroids) => $want`,
		({ asteroids, want }) => {
			const got = asteroidCollision(asteroids)
			expect(got).toEqual<number[]>(want)
		}
	)
})
