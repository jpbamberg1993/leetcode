export function twoSum(nums: number[], target: number): number[] {
  const result: number[] = []
  const map = new Map<number, number>()
  nums.forEach((num, index) => {
    const complement = target - num
    if (map.has(complement)) {
      result.push(map.get(complement) as number)
      result.push(index)
    }
    map.set(num, index)
  })
  return result
}