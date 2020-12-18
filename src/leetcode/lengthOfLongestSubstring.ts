/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
export function lengthOfLongestSubstring(s: string): number {
  let max = 0;
  for(let i=0; i<s.length; i++) {
    const existMap = new Map();
    existMap.set(s[i], 1);
    let maxTemp = 1;
    if (max > s.length - i) {
      break;
    }
    for (let j=i+1; j<s.length; j++) {
      if (existMap.get(s[j])) {
        break;
      }
      existMap.set(s[j], 1);
      maxTemp++;
    }
    max = max > maxTemp ? max : maxTemp;
  }
  return max;
};
// @lc code=end

// int n = s.length(), ans = 0;
// Map<Character, Integer> map = new HashMap<>();
// for (int end = 0, start = 0; end < n; end++) {
//     char alpha = s.charAt(end);
//     if (map.containsKey(alpha)) {
//         start = Math.max(map.get(alpha), start);
//     }
//     ans = Math.max(ans, end - start + 1);
//     map.put(s.charAt(end), end + 1);
// }
// return ans
