export const longestPalindrome = (str: string) => {
  
}

export const palindrome = (str: string, l: number, j: number) => {
  while(0 < l && j < str.length && str[l] === str[j]) {
    l--;
    j++;
  }
  return str.substring(l + 1, j);
}
