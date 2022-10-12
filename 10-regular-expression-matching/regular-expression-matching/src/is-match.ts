let _result: Result[][];

export function isMatch(s: string, p: string): boolean {
    _result = instantiateResult(s.length, p.length);
    return isMatchExpression(s, p, 0, 0);
}

function isMatchExpression(s: string, p: string, i: number, j: number) {
    if (j >= p.length) {
        return i >= s.length;
    }

    if (_result[i][j] !== Result.Undefined) {
        return _result[i][j] === Result.True;
    }

    const firstMatch = i < s.length && (s[i] === p[j] || p[j] === '.');
    let result = false;

    if (j + 1 < p.length && p[j + 1] === '*') {
        result = isMatchExpression(s, p, i, j + 2) || (firstMatch && isMatchExpression(s, p, i + 1, j));
    } else {
        result = firstMatch && isMatchExpression(s, p, i + 1, j + 1);
    }

    _result[i][j] = result ? Result.True : Result.False;
    return result;
}

function instantiateResult(sLength: number, pLength: number): Result[][] {
    const result = new Array(sLength + 1)
    for (let i = 0; i < result.length; i++) {
        result[i] = new Array(pLength + 1);
        for (let j = 0; j < result[i].length; j++) {
            result[i][j] = Result.Undefined;
        }
    }
    return result;
}

enum Result {
    Undefined,
    True,
    False,
}