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
            palindromeDictionary[i][i + 1] = false
        }
    }

    for (let k = 3; k <= sLength; k++) {
        for (let i = 0; i <= sLength - k; i++) {
            if (palindromeDictionary[i + 1][i + k - 2] && s.charAt(i) == s.charAt(i + k - 1)) {
                palindromeDictionary[i][i + k - 1] = true
                if (k > longestSubStringLength) {
                    longestSubStringLength = k
                    longestSubStringStartingIndex = i
                }
            } else {
                palindromeDictionary[i][i + k - 1] = false
            }
        }
    }

    return s.substring(longestSubStringStartingIndex, longestSubStringStartingIndex + longestSubStringLength)
}
