export function twoSum(nums: number[], target: number): [number, number] {
  const valueIndexDict = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const remainder: number = target - nums[i];

    if (valueIndexDict.has(remainder)) {
      return [valueIndexDict.get(remainder), i];
    }

    valueIndexDict.set(nums[i], i);
  }
}
