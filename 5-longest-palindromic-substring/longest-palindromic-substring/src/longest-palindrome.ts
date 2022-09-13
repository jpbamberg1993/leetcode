export function longestPalindrome(s: string): string {
    let start = 0;
    let end = 0;
    for (let i = 0; i < s.length; i++) {
        const lengthOne = getLength(s, i, i);
        const lengthTwo = getLength(s, i, i + 1);
        const length = Math.max(lengthOne, lengthTwo);
        if (length > end - start) {
            start = i - Math.floor((length - 1) / 2);
            end = i + Math.floor(length / 2);
        }
    }
    return s.substring(start, end + 1);
}

function getLength(s: string, i: number, j: number): number {
    let left = i;
    let right = j;
    while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
        left--;
        right++;
    }
    return right - left - 1;
}