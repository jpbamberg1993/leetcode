export function lengthOfLongestSubstring(s: string): number {
    const chars: Record<string, number> = {};

    let left = 0;
    let right = 0;

    let response = 0;
    while (right < s.length) {
        const r = s.charAt(right);
        chars[r] = (chars[r] || 0) + 1;

        while (chars[r] > 1) {
            const l = s.charAt(left);
            chars[l] -= 1;
            left++;
        }

        response = Math.max(right - left + 1, response);
        right++;
    }

    return response;
}