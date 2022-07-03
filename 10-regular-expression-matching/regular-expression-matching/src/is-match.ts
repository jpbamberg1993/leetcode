export class ExpressionMatching {
  private memo: Result[][];

  public isMatch(s: string, p: string): boolean {
    this.memo = Array(s.length + 1)
      .fill(null)
      .map(() => Array(p.length + 1))
    return this.isMatchExpression(0, 0, s, p)
  }

  private isMatchExpression(i: number, j: number, s: string, p: string): boolean {
    if (this.memo[i][j] !== undefined) {
      return this.memo[i][j] === Result.TRUE;
    }

    let answer: boolean = false
    if (j === p.length) {
      answer = i === s.length
    } else {
      const firstMatch = i < s.length && (p[j] === s[i] || p[j] === '.')

      if (j + 1 < p.length && p[j + 1] === '*') {
        answer = this.isMatchExpression(i, j + 2, s, p) ||
          (firstMatch && this.isMatchExpression(i + 1, j, s, p))
      } else {
        answer = firstMatch && this.isMatchExpression(i + 1, j + 1, s, p)
      }
    }

    this.memo[i][j] = answer ? Result.TRUE : Result.FALSE
    return answer
  }
}

enum Result {
  UNSET,
  TRUE,
  FALSE
}