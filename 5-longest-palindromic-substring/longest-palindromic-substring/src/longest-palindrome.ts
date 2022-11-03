export function longestPalindrome(s: string): string {
    if (s.length <= 1) return s;

    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        const length1 = GetLength(s, i, i);
        const length2 = GetLength(s, i, i + 1);
        const maxLength = Math.max(length1, length2);
        if (maxLength > end - start) {
            start = i - Math.trunc((maxLength - 1) / 2);
            end = i + Math.trunc(maxLength / 2);
        }
    }

    return s.substring(start, end + 1);
}

function GetLength(s: string, i: number, j: number) {
    let start = i;
    let end = j;
    while (start >= 0 && end < s.length && s.charAt(start) === s.charAt(end)) {
        start--;
        end++;
    }
    return end - start - 1;
}
