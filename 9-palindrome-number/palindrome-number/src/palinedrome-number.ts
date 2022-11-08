export function isPalindrome(x: number): boolean {
    if (x < 0) return false;

    let temp = x;
    let reversed = 0;
    while (temp !== 0) {
        const pop = temp % 10;
        reversed = reversed * 10 + pop;
        temp = Math.floor(temp / 10);
    }

    return x === reversed;
}