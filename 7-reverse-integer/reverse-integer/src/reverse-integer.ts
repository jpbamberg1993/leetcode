export function reverseInteger(x: number): number {
    let result: number = 0;
    while (x !== 0) {
        const num = x % 10;
        if (result * 10 > INT_MAX || (result === INT_MAX / 10 && num > INT_MAX % 10)) return 0
        if (result * 10 < INT_MIN || (result === INT_MIN / 10 && num < INT_MIN % 10)) return 0
        result = result * 10 + num
        x = Math.trunc(x / 10)
    }
    return result
}

const INT_MAX = Math.pow(2, 31) - 1
const INT_MIN = Math.pow(-2, 31)
