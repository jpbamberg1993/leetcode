import { asteroidCollision } from '../src/735-asteroid-collision'

type AsteroidCollisionTest = {
	name: string
	asteroids: number[]
	want: number[]
}

const asteroidCollisionTests: AsteroidCollisionTest[] = [
	{
		name: `smaller left-mover explodes`,
		asteroids: [5, 10, -5],
		want: [5, 10],
	},
	{ name: `equal sizes destroy each other`, asteroids: [8, -8], want: [] },
	{
		name: `left-mover destroys one, then is destroyed`,
		asteroids: [10, 2, -5],
		want: [10],
	},
	{
		name: `left-mover destroys every right-mover`,
		asteroids: [1, 2, 3, -10],
		want: [-10],
	},
	{
		name: `survivor joins earlier left-movers`,
		asteroids: [-2, -2, 1, -2],
		want: [-2, -2, -2],
	},
	{
		name: `left-mover clears two right-movers to reach a left-mover`,
		asteroids: [-2, 1, 1, -2],
		want: [-2, -2],
	},
	{ name: `moving apart never collide`, asteroids: [-1, 1], want: [-1, 1] },
	{ name: `all moving right`, asteroids: [1, 2, 3], want: [1, 2, 3] },
]

describe(`asteroidCollision`, () => {
	it.each(asteroidCollisionTests)(`$name => $want`, ({ asteroids, want }) => {
		expect(asteroidCollision(asteroids)).toEqual(want)
	})
})
