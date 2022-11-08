let results: boolean[][];

export function isMatch(s: string, p: string): boolean {
    results = create2dArray(s.length + 1, p.length + 1);
    return isMatchExpression(s, p, 0, 0);
}

function isMatchExpression(s: string, p: string, i: number, j: number): boolean {
    if (results[i][j] !== undefined) {
        return results[i][j];
    }

    if (j >= p.length) {
        return i >= s.length;
    }

    const firstMatch = i < s.length && (s[i] === p[j] || p[j] === '.');
    let result: boolean;
    if (j + 1 < p.length && p[j + 1] === '*') {
        result = isMatchExpression(s, p, i, j + 2) || (firstMatch && isMatchExpression(s, p, i + 1, j));
    } else {
        result = firstMatch && isMatchExpression(s, p, i + 1, j + 1);
    }

    results[i][j] = result;
    return result;
}

function create2dArray(xLength: number, yLength: number): boolean[][] {
    const x = new Array(xLength);
    for (let i = 0; i < xLength; i++) {
        x[i] = new Array(yLength);
    }
    return x;
}
