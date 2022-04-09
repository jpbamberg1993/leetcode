import {reverseInteger} from "../src/reverse-integer"

describe('reverseInteger', function(): void {
  it('is passed 123 and returns 321', function(): void {
    const result: number = reverseInteger(123)
    expect(result).toEqual(321)
  })

  it('is passed -123 and returns -321', function(): void {
    const result: number = reverseInteger(-123)
    expect(result).toEqual(-321)
  })

  it('is passed 120 and returns 21', function(): void {
    const result: number = reverseInteger(120)
    expect(result).toEqual(21)
  })

  it('is passed 0 and returns 0', function(): void {
    const result: number = reverseInteger(0)
    expect(result).toEqual(0)
  })

  it('is passed 1534236469 and returns 0', function(): void {
    const result: number = reverseInteger(1534236469)
    expect(result).toEqual(0)
  })

  it('is passed -900000 and returns -9', function(): void {
    const result: number = reverseInteger(-900000)
    expect(result).toEqual(-9)
  })
})
