import { longestPalindrome } from '../src/longest-palindrome'

describe('longestPalindrome', function () {
    it('is passed "cacac" and return "cacac"', function () {
        const result = longestPalindrome('cacac');

        expect(result).toEqual("cacac")
    })

    it('is passed "babad" and returns "bab"', function () {
        const result = longestPalindrome('babad')

        expect(result === "bab" || result === "aba").toBeTruthy()
    })

    it('is passed "cbbd" and returns "bb"', function () {
        const result = longestPalindrome("cbbd")

        expect(result).toEqual('bb')
    })

    it('is passed "ccc" and returns "ccc"', function () {
        const result = longestPalindrome("ccc")

        expect(result).toEqual('ccc')
    })

    it('is passed "aaaaa" and returns "aaaaa"', function () {
        const result = longestPalindrome("aaaaa")

        expect(result).toEqual("aaaaa")
    })

    it('is passed "aacabdkacaa" and returns "aca"', function () {
        const result = longestPalindrome("aacabdkacaa")

        expect(result).toEqual("aca")
    })
})
