export function asteroidCollision(asteroids: number[]) {
	const result = new Array<number>()
	for (let i = 0; i < asteroids.length; i++) {
		const asteroid = asteroids[i]
		const lastAsteroid = result[result.length - 1]
		if (result.length === 0 || lastAsteroid < 0 || asteroid > 0) {
			result.push(asteroid)
		} else {
			if (-asteroid > lastAsteroid) {
				result.pop()
				i--
			} else if (-asteroid === lastAsteroid) {
				result.pop()
			}
		}
	}
	return result
}
