/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
export function isPalindrome(x: number): boolean {
  if(!x && x !== 0) return false;
  const xStr = x.toString();
  let start = 0;
  let end = xStr.length-1;
  while(start <= end && xStr[start] === xStr[end]) {
    start++;
    end--;
  }
  if(start > end) return true;
  return false;
};
// @lc code=end

