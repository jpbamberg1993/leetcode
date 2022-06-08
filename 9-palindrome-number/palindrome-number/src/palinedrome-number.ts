export function isPalindrome(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  let reversedNumber: number = 0;
  while (x > reversedNumber) {
    reversedNumber = reversedNumber * 10 + x % 10;
    x = Math.floor(x / 10);
  }

  return reversedNumber === x || x === Math.floor(reversedNumber / 10);
}