import {isPalindrome} from '../src/palinedrome-number'

describe('isPalindrome', function isPalindromeTests() {
  it('is passed 121 and returns true', function() {
    const result = isPalindrome(121)
    expect(result).toEqual(true)
  })

  it('is passed -121 and returns false', function() {
    const result = isPalindrome(-121)
    expect(result).toEqual(false)
  })

  it('is passed 10 and returns false', function() {
    const result = isPalindrome(10)
    expect(result).toEqual(false)
  })
})