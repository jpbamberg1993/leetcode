export function longestPalindrome(s: string): string {
    if (s == null || s.length < 1) return '';

    let start = 0;
    let end = 0;
    for (let i = 0; i < s.length; i++) {
        const length1 = getLength(s, i, i);
        const length2 = getLength(s, i, i + 1);
        const length = Math.max(length1, length2);
        if (length > end - start) {
            start = i - ((length / 2) - 1);
            end = i + (length / 2);
        }
    }

    return s.substring(start, end + 1);
}

function getLength(s: string, i: number, j: number): number {
    let start = i;
    let end = j;
    while (start >= 0 && end < s.length && s[start] === s[end]) {
        start--;
        end++;
    }
    return end - start - 1;
}