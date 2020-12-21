/*
 * @lc app=leetcode.cn id=8 lang=typescript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
  const nums: string[] = [];
  let startWithZero = false;
  let hasSign = false;
  let isNegative = false;
  for (let i=0; i<s.length; i++) {
    // 处理空白字符
    if(s[i] === ' ') {
      if ((startWithZero || hasSign) && nums.length === 0) break;
      if (nums.length > 0) break;
      continue;
    }
    if(s[i] === ' ' && (startWithZero || nums.length > 0)) break; 
    // 处理头部的异常字符
    if(nums.length === 0 && s[i]!== '+' && s[i] !== '-' && s[i] <= '0' && s[i] > '9') {
      break;
    }
    // 处理头部的正、负号
    if (nums.length === 0  && (s[i] === '+' || s[i] === '-')) {
      if (!hasSign && !startWithZero) {
        isNegative = s[i] === '-';
        hasSign = true;
        continue;
      }
    }
    // 处理数字
    if (s[i] >= '0' && s[i] <= '9') {
      // 处理头部是0的情况
      if(s[i] === '0' && nums.length === 0) {
        startWithZero = true;
        continue;
      }
      nums.push(s[i]);
      continue;
    }
    break;
  }
  // 转换为数字
  const MAX = Math.pow(2, 31)-1;
  const MIN = -Math.pow(2, 31);
  let resultNum = 0;
  for (let i=0; i<nums.length; i++) {
    resultNum += Number(nums[i]) * Math.pow(10, nums.length-i-1);
    if (isNegative && (-resultNum < MIN)) {
      return MIN;
    }
    if (!isNegative && (resultNum > MAX)) {
      return MAX;
    }
  }
  if (isNegative && resultNum > 0) {
    return -resultNum;
  }
  return resultNum;
};
// @lc code=end

