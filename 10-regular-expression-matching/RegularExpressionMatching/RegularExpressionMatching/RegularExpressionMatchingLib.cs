namespace RegularExpressionMatching;

public static class RegularExpressionMatchingLib
{
    public static bool IsMatch(string s, string p)
    {
        if (p.Length == 0) return s.Length == 0;

        var firstMatch = !string.IsNullOrWhiteSpace(s) && (p[0] == s[0] || p[0] == '.');

        if (p.Length >= 2 && p[1] == '*')
        {
            return (IsMatch(s, p.Substring(2)) ||
                    (firstMatch && IsMatch(s.Substring(1), p)));
        }

        return firstMatch && IsMatch(s.Substring(1), p.Substring(1));
    }
}