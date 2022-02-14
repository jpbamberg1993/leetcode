import {longestPalindrome} from '../src/longest-palindrome'

describe('longestPalindrome', function () {
    it('is passed "babad" and returns "bab"', function () {
        const result = longestPalindrome('babad')

        expect(result).toEqual('bab')
    })

    it('is passed "cbbd" and returns "cbbd"', function () {
        const result = longestPalindrome("cbbd")

        expect(result).toEqual('bb')
    })
})
