namespace RegularExpressionMatching;

public class RegularExpressionMatchingLib
{
    public bool IsMatch(string s, string p)
    {
        return IsMatch(s, p, 0, 0);
    }

    private bool IsMatch(string s, string p, int i, int j)
    {
        if (j >= p.Length) return i >= s.Length;

        var firstMatch = i < s.Length && (s[i] == p[j] || p[j] == '.');
        if (j + 1 < p.Length && p[j + 1] == '*')
        {
            return (firstMatch && IsMatch(s, p, i + 1, j)) || IsMatch(s, p, i, j + 2);
        }

        return firstMatch && IsMatch(s, p, i + 1, j + 1);
    }
}
