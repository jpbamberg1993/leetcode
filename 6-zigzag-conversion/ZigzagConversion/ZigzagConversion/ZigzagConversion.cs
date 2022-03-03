namespace ZigzagConversion;

public static class ZigzagConversion
{
    public static string Convert(string s, int numRows)
    {
        if (s.Length <= 1 || numRows == 1)
        {
            return s;
        }
        
        var zigzagDict = new List<char>[numRows].Select(c => new List<char>()).ToArray();

        for (var i = 0; i < Math.Min(numRows, s.Length); i++)
        {
            zigzagDict[i].Add(s[i]);
        }

        var goingDown = true;
        var currentRow = numRows - 1;

        for (var i = numRows; i < s.Length; i++)
        {
            if (currentRow == 0 || (currentRow + 1) % numRows == 0)
            {
                goingDown = !goingDown;
            }

            if (goingDown)
            {
                currentRow++;
            }
            else
            {
                currentRow--;
            }
            
            zigzagDict[currentRow].Add(s[i]);
        }

        var dictString = "";

        foreach (var listOfChars in zigzagDict)
        {
            dictString += string.Join("", listOfChars);
        }

        return dictString;
    }
}