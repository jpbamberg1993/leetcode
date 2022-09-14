using System.Text;

namespace ZigzagConversion;

public static class ZigzagConversion
{
    public static string Convert(string s, int numRows)
    {
        if (numRows <= 1) return s;

        var rows = new StringBuilder[Math.Min(numRows, s.Length)];
        for (var i = 0; i < rows.Length; i++)
            rows[i] = new StringBuilder();

        var currentRow = 0;
        var goingDown = false;

        foreach (var letter in s)
        {
            rows[currentRow].Append(letter);
            if (currentRow == 0 || currentRow == numRows - 1) goingDown = !goingDown;
            currentRow += goingDown ? 1 : -1;
        }

        var result = new StringBuilder();
        foreach (var stringBuilder in rows) result.Append(stringBuilder);
        return result.ToString();
    }
}