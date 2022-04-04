namespace ReverseInteger;

public class ReverseInteger
{
    public int Reverse(int x)
    {
        var reversedNumber = 0;
        while (x != 0)
        {
            var remainder = x % 10;
            x /= 10;
            if (reversedNumber > int.MaxValue / 10 || (reversedNumber == Int32.MaxValue / 10 && remainder > 7)) return 0;
            if (reversedNumber < int.MinValue / 10 || (reversedNumber == Int32.MinValue / 10 && remainder > 8)) return 0;
            reversedNumber = (reversedNumber * 10) + remainder;
        }
        
        return reversedNumber;
    }
}