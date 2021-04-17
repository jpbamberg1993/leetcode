import { lengthOfLongestSubstring } from '../src/length-of-longest-substring'

describe('lengthOfLongestSubstring', function() {
  it('returns longest substring', function() {
    const s = 'abcabcbb'

    const result = lengthOfLongestSubstring(s)

    expect(result).toBe(3)
  })

  it('returns longest substring where all characters repeat', function() {
    const s = 'bbbbb'

    const result = lengthOfLongestSubstring(s)

    expect(result).toBe(1)
  })

  it('returns longest substring with repeating characters', function() {
    const s = 'pwwkew'

    const result = lengthOfLongestSubstring(s)

    expect(result).toBe(3)
  })

  it('returns longest substring with an empty string', function() {
    const s = ''

    const result = lengthOfLongestSubstring(s)

    expect(result).toBe(0)
  })

  it('returns longest substring with only a blank space for a string', function() {
    const s = ' '

    const result = lengthOfLongestSubstring(s)

    expect(result).toBe(1)
  })

  it('returns longest substring from aab', function() {
    const s = 'aab'

    const result = lengthOfLongestSubstring(s)

    expect(result).toBe(2)
  })
})
