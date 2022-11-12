export function lengthOfLongestSubstring(s: string): number {
    if (s.length < 1) return 0;

    const chars = new Map<string, number>();

    let result = 0;
    let start = 0;
    let end = 0;

    while (end < s.length) {
        const r = s.charAt(end);

        chars.set(r, chars.get(r) + 1 || 1);

        while (chars.get(r) > 1) {
            const l: string = s[start];
            chars.set(l, chars.get(l) - 1);
            start++;
        }

        result = Math.max(result, end - start + 1);
        end++;
    }

    return result;
}