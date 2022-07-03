namespace RegularExpressionMatching;

public class RegularExpressionMatchingLib
{
    public bool IsMatch(string s, string p)
    {
        return IsMatch(0, 0, s, p);
    }

    private bool IsMatch(int i, int j, string s, string p)
    {
        if (j == p.Length)
        {
            return i == s.Length;
        }
        else
        {
            var firstMatch = i < s.Length && (p[j] == s[i] || p[j] == '.');
            
            if (j + 1 < p.Length && p[j + 1] == '*')
            {
                return (IsMatch(i, j + 2, s, p) || (firstMatch && IsMatch(i + 1, j, s, p)));
            }
            else
            {
                return firstMatch && IsMatch(i + 1, j + 1, s, p);
            }
        }
    }
}