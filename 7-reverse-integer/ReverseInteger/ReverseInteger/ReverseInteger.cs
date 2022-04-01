using System.Globalization;

namespace ReverseInteger;

public class ReverseInteger
{
    public int Reverse(int x)
    {
        if (x == 0)
        {
            return 0;
        }
        
        var isNegative = false;
        if (x < 0)
        {
            isNegative = true;
            x = Math.Abs(x);
        }
        
        var xStack = NumbersIn(x);

        var result = string.Join("", xStack);
        result = isNegative ? $"-{result}" : result;
        
        return Convert.ToInt32(result);
    }

    private Stack<int> NumbersIn(int value)
    {
        if (value == 0) return new Stack<int>();

        var numbers = NumbersIn(value / 10);

        numbers.Push(value % 10);

        return numbers;
    }
}