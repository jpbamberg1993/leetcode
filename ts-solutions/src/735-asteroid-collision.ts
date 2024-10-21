export const asteroidCollision = (asteroids: number[]) => {
	let result: number[] = []
	for (let i = 0; i < asteroids.length; i++) {
		const asteroid = asteroids[i]
		const rLength = result.length
		const lastResult = result[rLength - 1]

		if (rLength === 0 || lastResult < 0 || asteroid > 0) {
			result.push(asteroid)
		} else {
			if (-asteroid > lastResult) {
				result = result.slice(0, -1)
				i--
			} else if (-asteroid === lastResult) {
				result.pop()
			}
		}
	}
	return result
}
