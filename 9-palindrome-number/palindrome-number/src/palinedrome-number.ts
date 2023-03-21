export function isPalindrome(x: number): boolean {
    if (x < 0) return false
    const original = x
    let reversed = 0
    while (x > 0) {
        const remainder = x % 10
        x = Math.trunc(x / 10)
        reversed = reversed * 10 + remainder
    }
    return original === reversed
}
