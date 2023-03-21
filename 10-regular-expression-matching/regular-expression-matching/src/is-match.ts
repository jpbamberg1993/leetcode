export function isMatch(s: string, p: string): boolean {
    return isMatchExpression(s, p, 0, 0)
}

function isMatchExpression(s: string, p: string, i: number, j: number): boolean {
    if (j >= p.length) return i >= s.length

    const firstMatch = i < s.length && (s[i] === p[j] || p[j] === '.')
    if (j + 1 < p.length && p[j + 1] === '*') {
        return (firstMatch && isMatchExpression(s, p, i + 1, j))
            || isMatchExpression(s, p, i, j + 2)
    }

    return firstMatch && isMatchExpression(s, p, i + 1, j + 1)
}
