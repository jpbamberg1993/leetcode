export function zigzagConversion(s: string, numRows: number): string {
  if (numRows === 1) {
    return s
  }

  let goingDown: boolean = false
  let currentRow: number = 0
  let zigzagDict: string[] = new Array(numRows)

  for (let i = 0; i < numRows; i++) {
    zigzagDict[i] = ""
  }

  for (let i = 0; i < s.length; i++) {
    zigzagDict[currentRow] += s.charAt(i)

    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown
    }

    currentRow += goingDown ? 1 : -1
  }

  return zigzagDict.join("")
}
