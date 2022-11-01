using System.Text;

namespace ZigzagConversion;

public static class ZigzagConversion
{
    public static string Convert(string s, int numRows)
    {
        if (numRows <= 1) return s;
        
        var zigzag = new StringBuilder[numRows];
        for (var i = 0; i < zigzag.Length; i++)
            zigzag[i] = new StringBuilder();
        
        var goingDown = false;
        var currentRow = 0;
        foreach (var ch in s)
        {
            if (currentRow == 0 || currentRow == zigzag.Length - 1) goingDown = !goingDown;
            zigzag[currentRow].Append(ch);
            currentRow += goingDown ? 1 : -1;
        }

        var result = new StringBuilder();
        foreach (var row in zigzag) result.Append(row);
        return result.ToString();
    }
} 