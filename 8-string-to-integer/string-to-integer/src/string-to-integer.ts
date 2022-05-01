export function myAtoi(s: string): number {
  let currentIndex: number = 0
  let sign: number = 1
  let result: number = 0

  while (currentIndex < s.length && s.charAt(currentIndex) === ' ') {
    currentIndex++
  }

  if (currentIndex < s.length && s.charAt(currentIndex) === '-') {
    sign = -1
    currentIndex++
  } else if (currentIndex < s.length && s.charAt(currentIndex) === '+') {
    currentIndex++
  }

  while (currentIndex < s.length && charIsDigit(s.charAt(currentIndex))) {
    const currentNumber: number = parseInt(s.charAt(currentIndex))

    if (
      result > Number.MAX_SAFE_INTEGER / 10 ||
      (result === Number.MAX_SAFE_INTEGER && currentNumber > Number.MAX_SAFE_INTEGER % 10)) {
      result = Number.MAX_SAFE_INTEGER
      break
    }

    result = result * 10 + currentNumber
    currentIndex++
  }

  return result * sign
}

function charIsDigit(s: string): boolean {
  return s >= '0' && s <= '9'
}
