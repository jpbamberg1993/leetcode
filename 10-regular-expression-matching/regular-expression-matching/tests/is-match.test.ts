import {isMatch} from '../src/is-match'

describe('isMatch', function() {
  it('is passed "aa" and "a" and returns false', function() {
    const result = isMatch('aa', 'a')
    expect(result).toBe(false)
  })

  it('is passed "aa" and "a*" and returns true', function() {
    const result = isMatch('aa', 'a*')
    expect(result).toBe(true)
  })

  it('is passed "ab" and ".*" and returns true', function() {
    const result = isMatch("ab", ".*")
    expect(result).toBe(true)
  })

  it('is passed "ab" and ".*c" and returns false', function() {
    const result = isMatch("ab", ".*c")
    expect(result).toBe(false)
  })

  it('is passed "aab" and "c*a*b" and returns true', function() {
      const result = isMatch("aab", "c*a*b")
      expect(result).toBe(true)
  })
})
