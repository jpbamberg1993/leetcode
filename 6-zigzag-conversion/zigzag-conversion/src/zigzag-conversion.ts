export function zigzagConversion(s: string, numRows: number): string {
    if (numRows <= 1) return s;

    const zigzag = Array<string>(numRows);
    for (let i = 0; i < zigzag.length; i++) {
        zigzag[i] = '';
    }

    let goingDown = false;
    let currentRow = 0;
    for (let i = 0; i < s.length; i++) {
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        zigzag[currentRow] = zigzag[currentRow] + s.charAt(i);

        currentRow += goingDown ? 1 : -1;
    }

    return zigzag.join('');
}