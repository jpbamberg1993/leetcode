export function zigzagConversion(s: string, numRows: number): string {
    if (numRows <= 1) return s;

    const rows = new Array(Math.min(s.length, numRows));
    for (let i = 0; i < rows.length; i++) rows[i] = "";

    let currentRow = 0;
    let goingDown = false;

    for (let i = 0; i < s.length; i++) {
        rows[currentRow] += s.charAt(i);
        if (currentRow === 0 || currentRow === numRows - 1) goingDown = !goingDown;
        currentRow += goingDown ? 1 : -1;
    }

    return rows.reduce((prev, curr) => prev.concat(curr))
}