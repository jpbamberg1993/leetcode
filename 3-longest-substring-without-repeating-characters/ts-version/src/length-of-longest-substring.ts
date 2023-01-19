export function lengthOfLongestSubstring(s: string): number {
  const letterCountDict = new Map<string, number>();
  let result = 0;
  let start = 0;
  let end = 0;

  while (end < s.length) {
    let r: string = s.charAt(end)
    letterCountDict.set(r, (letterCountDict.get(r) ?? 0) + 1)

    while (letterCountDict.get(r)! > 1) {
      const l = s.charAt(start);
      letterCountDict.set(l, letterCountDict.get(l)! - 1)
      start++;
    }

    result = Math.max(end - start + 1, result)
    end++
  }

  return result;
}
