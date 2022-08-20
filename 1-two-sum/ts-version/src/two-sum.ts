import Calculator from './calculator'

export default function twoSum(nums: number[], target: number): number[] {
    const dict = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const remainder = Calculator.difference(target, nums[i])

        if (dict.has(remainder)) {
            return [dict.get(remainder), i]
        }

        dict.set(nums[i], i)
    }
}
