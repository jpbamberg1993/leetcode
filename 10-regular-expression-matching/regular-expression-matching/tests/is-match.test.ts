import {ExpressionMatching} from '../src/is-match'

describe('isMatch', function() {
  let expressionMatching: ExpressionMatching;

  beforeEach(() => expressionMatching = new ExpressionMatching)

  it('is passed "aa" and "a" and returns false', function() {
    const result = expressionMatching.isMatch('aa', 'a')
    expect(result).toBe(false)
  })

  it('is passed "aa" and "a*" and returns true', function() {
    const result = expressionMatching.isMatch('aa', 'a*')
    expect(result).toBe(true)
  })

  it('is passed "ab" and ".*" and returns true', function() {
    const result = expressionMatching.isMatch("ab", ".*")
    expect(result).toBe(true)
  })

  it('is passed "ab" and ".*c" and returns false', function() {
    const result = expressionMatching.isMatch("ab", ".*c")
    expect(result).toBe(false)
  })
})