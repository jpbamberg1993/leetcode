using System.Text;

namespace ZigzagConversion;

public static class ZigzagConversion
{
    public static string Convert(string s, int numRows)
    {
        if (numRows == 1)
        {
            return s;
        }

        var rowsCount = Math.Min(s.Length, numRows);
        
        var zigzagDict = new StringBuilder[rowsCount]
            .Select(c => new StringBuilder())
            .ToArray();
        
        var goingDown = false;
        var currentRow = 0;

        foreach (var ch in s)
        {
            zigzagDict[currentRow].Append(ch);
            if (currentRow == 0 || (currentRow + 1) % rowsCount == 0) goingDown = !goingDown;
            currentRow += goingDown ? 1 : -1;
        }

        var dictString = zigzagDict[0];

        for (var index = 1; index < zigzagDict.Length; index++)
        {
            dictString.Append(zigzagDict[index]);
        }

        return dictString.ToString();
    }
}