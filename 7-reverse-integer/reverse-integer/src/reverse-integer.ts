const INT_MAX = 2147483647;
const INT_MIN = -2147483648;

export function reverseInteger(x: number): number {
    let result: number = 0;

    while (x !== 0) {
        const pop = x % 10;
        x = x < 0 ? Math.ceil(x / 10) : Math.floor(x / 10);
        if (result > INT_MAX / 10 || (result === INT_MAX / 10 && pop > 7)) return 0;
        if (result < INT_MIN / 10 || (result === INT_MIN / 10 && pop < -8)) return 0;
        result = result * 10 + pop
    }

    return result;
}