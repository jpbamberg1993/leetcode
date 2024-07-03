export const maxArea = (height: number[]) => {
	let leftPointer = 0
	let rightPointer = height.length - 1
	let maxArea = -1
	while (leftPointer < rightPointer) {
		const leftHeight = height[leftPointer]
		const rightHeight = height[rightPointer]
		const width = rightPointer - leftPointer
		maxArea = Math.max(maxArea, Math.min(leftHeight, rightHeight) * width)
		if (leftHeight <= rightHeight) {
			leftPointer++
		} else {
			rightPointer--
		}
	}
	return maxArea
}
