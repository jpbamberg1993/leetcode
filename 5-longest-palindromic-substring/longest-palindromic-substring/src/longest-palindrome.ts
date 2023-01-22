export function longestPalindrome(s: string): string {
    let start: number = 0
    let end: number = 0
    for (let i = 0; i < s.length; i++) {
        const length1 = moveOutFromCenter(i, i, s)
        const length2 = moveOutFromCenter(i, i + 1, s)
        const length = Math.max(length1, length2)
        if (length > end - start) {
            start = i - ((length / 2) - 1)
            end = i + (length / 2)
        }
    }
    return s.substring(start, end + 1)
}

function moveOutFromCenter(start: number, end: number, s: string): number {
    while (start >= 0 && end < s.length && s.charAt(start) === s.charAt(end)) {
        start--
        end++
    }
    return end - start - 1
}