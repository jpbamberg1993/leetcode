using System.Text;

namespace ZigzagConversion;

public static class ZigzagConversion
{
    public static string Convert(string s, int numRows)
    {
        if (numRows <= 1) return s;
        
        var stringBuilders = new StringBuilder[numRows];
        for (var i = 0; i < stringBuilders.Length; i++)
        {
            stringBuilders[i] = new StringBuilder();
        }
        var goingDown = false;
        var currentRow = 0;
        for (var i = 0; i < s.Length; i++)
        {
            stringBuilders[currentRow] = stringBuilders[currentRow].Append(s[i]);
            if (currentRow == 0 || currentRow == numRows - 1)
            {
                goingDown = !goingDown;
            }

            currentRow += goingDown ? 1 : -1;
        }

        var result = new StringBuilder();
        foreach (var stringBuilder in stringBuilders)
        {
            result.Append(stringBuilder.ToString());
        }

        return result.ToString();
    }
}