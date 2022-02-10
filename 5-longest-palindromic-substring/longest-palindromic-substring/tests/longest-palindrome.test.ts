import { longestPalindrome } from '../src/longest-palindrome'

describe('longestPalindrome', function() {
  it('is passed babad and returns bab', function() {
    const result = longestPalindrome('babad')

    expect(result).toEqual('bab')
  })
})
