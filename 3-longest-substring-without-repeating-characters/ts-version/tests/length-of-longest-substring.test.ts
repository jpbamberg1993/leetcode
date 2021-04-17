import { lengthOfLongestSubstring } from '../src/length-of-longest-substring'

describe('lengthOfLongestSubstring', function() {
  it('returns longest substring', function() {
    const s = 'abcabcbb'

    const result = lengthOfLongestSubstring(s)

    expect(result).toBe(3)
  })

  it('returns longest substring', function() {
    const s = 'bbbbb'

    const result = lengthOfLongestSubstring(s)

    expect(result).toBe(1)
  })

  it('returns longest substring', function() {
    const s = 'pwwkew'

    const result = lengthOfLongestSubstring(s)

    expect(result).toBe(3)
  })

  it('returns longest substring', function() {
    const s = ''

    const result = lengthOfLongestSubstring(s)

    expect(result).toBe(0)
  })
})