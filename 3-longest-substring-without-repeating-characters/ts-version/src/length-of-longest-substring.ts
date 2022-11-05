export function lengthOfLongestSubstring(s: string): number {
    const chars = new Map<string, number>();

    let result = 0;
    let left = 0;
    let right = 0;
    while (right < s.length) {
        const r: string = s.charAt(right);
        chars.set(r, chars.get(r) + 1 || 1);

        while (chars.get(r) > 1) {
            const l: string = s.charAt(left);
            chars.set(l, chars.get(l) - 1);
            left++;
        }

        result = Math.max(result, right - left + 1);
        right++;
    }

    return result;
}