export function kidsWithCandies(
	candies: number[],
	extraCandies: number
): number[] {
	let maxCandies = -1
	for (const candy of candies) {
		if (candy > maxCandies) {
			maxCandies = candy
		}
	}
	const response = new Array(candies.length)
	for (let i = 0; i < candies.length; i++) {
		response[i] = candies[i] + extraCandies >= maxCandies
	}
	return response
}
