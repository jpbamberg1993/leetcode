namespace StringToInteger;

public static class ConvertString
{
    public static int MyAtoi(string s)
    {
        var sign = 1;
        var result = 0;
        var index = 0;
        var n = s.Length;

        while (index < n && s[index] == ' ')
        {
            index++;
        }

        if (index < n && s[index] == '+')
        {
            sign = 1;
            index++;
        }
        else if (index < n && s[index] == '-')
        {
            sign = -1;
            index++;
        }

        while (index < n && char.IsDigit(s[index]))
        {
            var currentDigit = s[index] - '0';

            if (result > int.MaxValue / 10 || (result == int.MaxValue / 10 && currentDigit > int.MaxValue % 10))
            {
                return sign == 1 ? int.MaxValue : int.MinValue;
            }

            result = result * 10 + currentDigit;
            index++;
        }

        return sign * result;
    }
}
