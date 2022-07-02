export function isMatch(s: string, p: string): boolean {
  if (p === '') return s === ''

  const firstMatch: boolean = s !== '' && (p.charAt(0) === s.charAt(0) || p.charAt(0) === '.')

  if (p.length >= 2 && p.charAt(1) === '*') {
    return (isMatch(s, p.substring(2)) || (firstMatch && isMatch(s.substring(1), p)))
  }

  return firstMatch && isMatch(s.substring(1), p.substring(1))
}