const integerMaxValue: number = 2147483647
const integerMinValue: number = -2147483648

export function reverseInteger(x: number): number {
  let reversedNumber: number = 0
  
  while (x != 0) {
    const remainder: number = x % 10
    x = Math.trunc(x / 10)
    if (reversedNumber > integerMaxValue / 10 || (reversedNumber === integerMaxValue / 10 && remainder > 7)) return 0
    if (reversedNumber < integerMinValue / 10 || (reversedNumber === integerMinValue / 10 && remainder > 8)) return 0
    reversedNumber = reversedNumber * 10 + remainder
  }

  return reversedNumber
}
