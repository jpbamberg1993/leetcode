namespace RegularExpressionMatching;

public class RegularExpressionMatchingLib
{
    public bool IsMatch(string s, string p)
    {
        if (string.IsNullOrWhiteSpace(p)) return string.IsNullOrWhiteSpace(s);

        var match = !string.IsNullOrWhiteSpace(s) && (s[0] == p[0] || p[0] == '.');
        
        if (p.Length > 1 && p[1] == '*')
        {
            return (IsMatch(s, p[2..]) || (match && IsMatch(s[1..], p)));
        }

        return match && IsMatch(s[1..], p[1..]);
    }
}