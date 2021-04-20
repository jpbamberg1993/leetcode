export function lengthOfLongestSubstring(s: string): number {
  const map = new Map<string, number>()
  let answer = 0
  for (let i = 0, j = 0; j < s.length; j++) {
    if (map.has(s.charAt(j))) {
      i = Math.max(map.get(s.charAt(j)), i)
    }

    answer = Math.max(answer, j - i + 1)
    map.set(s.charAt(j), j + 1)
  }

  return answer
}
