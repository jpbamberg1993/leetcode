export const largestAltitude = (gain: number[]): number => {
	const tempGain = [0, ...gain]
	for (let i = 2; i < tempGain.length; i++) {
		tempGain[i] += tempGain[i - 1]
	}
	return Math.max(...tempGain)
}
