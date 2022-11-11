namespace ReverseInteger;

public class ReverseInteger
{
    public int Reverse(int x)
    {
        var reversed = 0;
        while (x != 0)
        {
            var pop = x % 10;
            if (reversed > int.MaxValue / 10 || (reversed == int.MaxValue / 10 && pop > int.MaxValue % 10))
            {
                return 0;
            }

            if (reversed < int.MinValue / 10 || (reversed == int.MinValue / 10 && pop < int.MinValue % 10))
            {
                return 0;
            }

            reversed = reversed * 10 + pop;
            x /= 10;
        }

        return reversed;
    }
}