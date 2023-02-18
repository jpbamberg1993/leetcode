export function zigzagConversion(s: string, numRows: number): string {
  if (numRows <= 1) {
    return s
  }

  const response: string[] = new Array(numRows).fill('')
  let goingDown: boolean = false
  let currentRow: number = 0

  for (let i = 0; i < s.length; i++) {
    response[currentRow] += s[i]

    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown
    }

    currentRow += goingDown ? 1 : -1
  }

  return response.join('')
}
