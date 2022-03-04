import {zigzagConversion} from '../src/zigzag-conversion'

describe('zigzagConversion', function() {
  it('is passed ("PAYPALISHIRING", 3) and returns "PAHNAPLSIIGYIR"', function () {
    const s: string = "PAYPALISHIRING"
    const numRows: number = 3

    const result: string = zigzagConversion(s, numRows)

    expect(result).toEqual("PAHNAPLSIIGYIR")
  })

  it('is passed ("PAYPALISHIRING", 4) and returns "PINALSIGYAHRPI"', function () {
    const s: string = "PAYPALISHIRING"
    const numRows: number = 4

    const result: string = zigzagConversion(s, numRows)

    expect(result).toEqual("PINALSIGYAHRPI")
  })

  it('is passed ("A", 1) and returns "A"', function () {
    const s: string = "A"
    const numRows: number = 1

    const result: string = zigzagConversion(s, numRows)

    expect(result).toEqual("A")
  })
})
