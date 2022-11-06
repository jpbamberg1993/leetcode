export default function twoSum(nums: number[], target: number): [number, number] {
    const charIndexDict = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        const remainder = target - value;
        if (charIndexDict.has(remainder)) {
            return [charIndexDict.get(remainder), i];
        }
        charIndexDict.set(value, i);
    }
}