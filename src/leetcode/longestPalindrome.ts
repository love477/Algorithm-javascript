// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

// 示例 1：

// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。
// 示例 2：

// 输入: "cbbd"
// 输出: "bb"
function longestPalindrome(s: string): string {
  const palindrome = (s: string, i: number, j: number): string => {
    while(i>=0 && j<s.length && s[i]===s[j]) {
      i--;
      j++;
    }
    console.log(i,j);
    if (s[i+1]===s[j-1]) {
      return s.slice(i+1, j);
    }
    return '';
  };
  let res = '';
  for(let i=0; i<s.length; i++) {
    const s1 = palindrome(s, i, i);
    const s2 = palindrome(s, i, i+1);
    console.log(s1, s2);
    res = res.length > s1.length ? res : s1;
    res = res.length > s2.length ? res : s2;
  }
  return res;
};