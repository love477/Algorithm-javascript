/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  if (s[0] !== '(' && s[0] !== '{' && s[0] !== '[') {
    return false;
  }
  const stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const cur = stack.pop()
    if (!cur) {
      stack.push(s[i]);
      continue;
    }
    if (cur === '(' && s[i] === ')') {
      continue;
    }
    if (cur === '{' && s[i] === '}') {
      continue;
    }
    if (cur === '[' && s[i] === ']') {
      continue;
    }
    stack.push(cur);
    stack.push(s[i]);
  }
  return stack.length === 0;
};
// @lc code=end

// 大括号

// braces;

// 方括号

// brackets;

// 圆括号

// parentheses;