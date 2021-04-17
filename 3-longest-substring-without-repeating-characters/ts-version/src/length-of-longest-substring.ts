export function lengthOfLongestSubstring(s: string): number {
  const characters = Array.from(s)
  let maxLength = 0
  let currentArr = []
  let startingIndex = 0
  for (let i = 0; i < characters.length; i++) {
    if (currentArr.includes(characters[i])) {
      while (startingIndex < i && currentArr.shift() != characters[i]) {
        startingIndex++
      }
    }
    currentArr.push(characters[i])
    maxLength = currentArr.length > maxLength ? currentArr.length : maxLength
  }
  return maxLength === 0 ? currentArr.length : maxLength
}
