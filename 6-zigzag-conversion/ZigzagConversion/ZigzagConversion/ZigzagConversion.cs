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
            stringBuilders[i]= new StringBuilder();
        }

        var goingUp = false;
        var currentRow = 0;
        for (var i = 0; i < s.Length; i++)
        {
            var letter = s[i];
            stringBuilders[currentRow].Append(letter);

            if (currentRow == 0 && goingUp)
            {
                currentRow++;
                goingUp = false;
                continue;
            }

            if (currentRow == numRows - 1 && !goingUp)
            {
                currentRow--;
                goingUp = true;
                continue;
            }

            if (goingUp)
            {
                currentRow--;
            }
            else
            {
                currentRow++;
            }
        }

        var result = new StringBuilder();
        foreach (var stringBuilder in stringBuilders)
        {
            result.Append(stringBuilder);
        }

        return result.ToString();
    }
}