namespace RegularExpressionMatching;

public class RegularExpressionMatchingLib
{
    private Result[,] _results;

    public bool IsMatch(string s, string p)
    {
        _results = new Result[s.Length + 1, p.Length + 1];
        return IsMatch(0, 0, s, p);
    }

    private bool IsMatch(int i, int j, string s, string p)
    {
        if (_results[i, j] != Result.UNSET)
        {
            return _results[i, j] == Result.TRUE;
        }

        if (j == p.Length)
        {
            return i == s.Length;
        }

        bool answer;
        var firstMatch = i < s.Length && (p[j] == s[i] || p[j] == '.');

        if (j + 1 < p.Length && p[j + 1] == '*')
        {
            answer = (IsMatch(i, j + 2, s, p) || (firstMatch && IsMatch(i + 1, j, s, p)));
        }
        else
        {
            answer = firstMatch && IsMatch(i + 1, j + 1, s, p);
        }

        _results[i, j] = answer ? Result.TRUE : Result.FALSE;
        return answer;
    }
}

public enum Result
{
    UNSET,
    TRUE,
    FALSE
}