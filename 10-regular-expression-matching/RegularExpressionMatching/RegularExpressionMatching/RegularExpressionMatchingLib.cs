namespace RegularExpressionMatching;

public static class RegularExpressionMatchingLib
{
    public static bool IsMatch(string s, string p)
    {
        if (s == p) return true;

        if (p.Contains('*'))
        {
            var indexOfCharBeforeStar = p.IndexOf('*') - 1;
            var charAtIndex = p[indexOfCharBeforeStar];

            var currentIndex = indexOfCharBeforeStar + 1;
            while (currentIndex < s.Length)
            {
                if (currentIndex > s.Length - 1)
                {
                    p += charAtIndex;
                }
                else
                {
                    p = p.Remove(currentIndex, 1).Insert(currentIndex, charAtIndex.ToString());
                }
                currentIndex++;
            }
        }

        if (p.Length != s.Length) return false;
        
        for (var i = 0; i < s.Length; i++)
        {
            if (s[i] != p[i] && p[i] != '.')
            {
                return false;
            }
        }
        
        return true;
    }
}
