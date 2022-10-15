export function isPalindrome(x: number): boolean {
    if (x < 0) return false;

    const original = x;
    let reversed = 0;

    while (x > 0) {
        const pop = x % 10;
        reversed = reversed * 10 + pop;
        x = Math.floor(x / 10);
    }

    return reversed === original;
}