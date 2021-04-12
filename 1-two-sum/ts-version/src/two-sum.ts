export default function twoSum(nums: number[], target: number): number[] {
  let map = new Map<number, number>()
  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i]
    if (map.has(difference)) {
      return [map.get(difference), i]
    }
    map.set(nums[i], i)
  }
  return []
}
