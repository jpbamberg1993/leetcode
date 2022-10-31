const INT_MAX = Math.pow(2, 31) - 1;
const INT_MIN = Math.pow(-2, 31);

export function reverseInteger(x: number): number {
    let rev = 0;
    while (x != 0) {
        const pop = x % 10;
        x = Math.trunc(x / 10);
        if (rev > Math.trunc(INT_MAX / 10) || (rev === Math.trunc(INT_MAX / 10) && pop > 7)) return 0;
        if (rev < Math.trunc(INT_MIN / 10) || (rev === Math.trunc(INT_MIN / 10) && pop < -8)) return 0;
        rev = rev * 10 + pop;
    }
    return rev;
}