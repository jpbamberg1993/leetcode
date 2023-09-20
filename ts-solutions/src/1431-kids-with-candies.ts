export function kidsWithCandies(candies: number[], extraCandies: number) {
	const max = Math.max(...candies)
	return candies.map((c) => c + extraCandies >= max)
}
