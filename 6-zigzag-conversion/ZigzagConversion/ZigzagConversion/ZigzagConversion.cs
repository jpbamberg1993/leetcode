using System.Text;

namespace ZigzagConversion;

public static class ZigzagConversion
{
    public static string Convert(string s, int numRows)
    {
        if (numRows <= 1) return s;

        var sLength = s.Length;
        var result = new StringBuilder();
        var cycleLength = 2 * numRows - 2;
        for (var i = 0; i < numRows; i++)
        {
            for (var j = 0; j + i < sLength; j += cycleLength)
            {
                result.Append(s[j + i]);
                if (i != 0 && i != numRows - 1 && j + cycleLength - i < sLength)
                {
                    result.Append(s[j + cycleLength - i]);
                }
            }
        }

        return result.ToString();
    }
}