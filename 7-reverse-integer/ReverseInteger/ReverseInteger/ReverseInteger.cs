namespace ReverseInteger;

public class ReverseInteger
{
    public int Reverse(int x)
    {
        var result = 0;
        while (x != 0)
        {
            var remainder = x % 10;
            x /= 10;
            if (result > int.MaxValue / 10 || (result == int.MaxValue / 10 && remainder > 7)) return 0;
            if (result < int.MinValue / 10 || (result == int.MinValue / 10 && remainder < -8)) return 0;
            result = result * 10 + remainder;
        }

        return result;
    }
}