export function kidsWithCandies(
	candies: number[],
	extraCandies: number
): boolean[] {
	const m = Math.max(...candies)
	const result = new Array<boolean>(candies.length)
	for (let i = 0; i < candies.length; i++) {
		result[i] = candies[i] + extraCandies >= m
	}
	return result
}
