export function longestPalindrome(s: string): string {
    const sLength = s.length

    if (sLength <= 1) {
        return s
    }

    const palindromeDictionary: boolean[][] = []
    let longestSubStringLength = 1
    let longestSubStringStartingIndex = 0

    for (let i = 0; i < sLength; i++) {
        palindromeDictionary[i] = []
        palindromeDictionary[i][i] = true
    }

    for (let i = 0; i < sLength - 1; i++) {
        if (s.charAt(i) === s.charAt(i + 1)) {
            palindromeDictionary[i][i + 1] = true
            longestSubStringStartingIndex = i
            longestSubStringLength = 2
        } else {
            palindromeDictionary[i][i + 1] = true
        }
    }

    return s.substring(
        longestSubStringStartingIndex,
        longestSubStringStartingIndex + longestSubStringLength)
}
