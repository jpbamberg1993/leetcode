import { myAtoi } from '../src/string-to-integer'

describe('myAtoi', function(): void {
  it('is passed "42" and returns 42', function() {
    const s: string = "42"
    const result: number = myAtoi(s)
    expect(result).toEqual(42);
  })

  it('is passed "   -42" and returns -42', function() {
    const s: string = "   -42"
    const result: number = myAtoi(s)
    expect(result).toEqual(-42)
  })

  it('is passed "4193 with words" and returns 4193', function() {
    const s: string = "4193 with words"
    const result: number = myAtoi(s)
    expect(result).toEqual(4193)
  })
})
