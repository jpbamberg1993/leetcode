using System.Text;

namespace ZigzagConversion;

public static class ZigzagConversion
{
    public static string Convert(string s, int numRows)
    {
        if (numRows == 1) return s;

        var zigzagDict = new StringBuilder();
        var stringLength = s.Length;
        var cycleLength = 2 * numRows - 2;

        for (var i = 0; i < numRows; i++)
        {
            for (var j = 0; j + i < stringLength; j += cycleLength)
            {
                zigzagDict.Append(s[i + j]);
                if (i != 0 && i != numRows - 1 && j + cycleLength - i < stringLength)
                {
                    zigzagDict.Append(s[j + cycleLength - i]);
                }
            }
        }

        return zigzagDict.ToString();
    }
}