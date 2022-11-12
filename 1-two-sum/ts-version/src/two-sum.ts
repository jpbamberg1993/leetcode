export default function twoSum(nums: number[], target: number): [number, number] {
    const digitIndexStore = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        const remainder = target - value;
        if (digitIndexStore.has(remainder)) {
            return [digitIndexStore.get(remainder), i];
        }
        digitIndexStore.set(value, i);
    }
}