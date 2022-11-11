const INT_MAX = Math.pow(2, 31) - 1;
const INT_MIN = Math.pow(-2, 31) - 1;

export function reverseInteger(x: number): number {
    let reversed = 0;
    while (x !== 0) {
        const pop = x % 10;
        x = Math.trunc(x / 10);
        if (reversed > Math.floor(INT_MAX / 10) || (reversed === Math.floor(INT_MAX / 10) && pop > INT_MAX % 10)) {
            return 0;
        }
        if (reversed < Math.ceil(INT_MIN / 10) || (reversed === Math.ceil(INT_MIN / 10) && pop < INT_MIN % 10)) {
            return 0;
        }
        reversed = reversed * 10 + pop;
    }
    return reversed;
}