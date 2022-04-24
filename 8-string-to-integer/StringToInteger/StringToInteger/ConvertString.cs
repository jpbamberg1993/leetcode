namespace StringToInteger;

public static class ConvertString
{
    public static int MyAtoi(string s)
    {
        var trimmedString = s.Trim();
        var returnString = string.Empty;
        var isNegative = trimmedString[0] == '-';

        foreach (var d in trimmedString)
        {
            if (d is '-' or '+') continue;

            if (!char.IsDigit(d))
            {
                if (returnString == String.Empty)
                    return 0;
                break;
            }

            returnString += d;
        }

        var tryParse = int.TryParse(returnString, out var returnValue);

        if (!tryParse)
        {
            return isNegative ? int.MinValue : int.MaxValue;
        }

        return isNegative ? returnValue * -1 : returnValue;
    }
}
