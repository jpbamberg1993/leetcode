export function zigzagConversion(s: string, numRows: number): string {
    if (numRows <= 1) return s;

    const rows: Array<string> = new Array(numRows);
    for (let i = 0; i < rows.length; i++) {
        rows[i] = '';
    }

    let currentRow = 0;
    let goingDown = false;
    for (let i = 0; i < s.length; i++) {
        if (currentRow === 0 || currentRow === rows.length - 1) goingDown = !goingDown;
        rows[currentRow] += s[i];
        currentRow += goingDown ? 1 : -1;
    }

    return rows.reduce((prev, cur) => prev + cur, "");
}