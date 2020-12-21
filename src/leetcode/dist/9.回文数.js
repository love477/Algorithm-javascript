"use strict";
/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */
exports.__esModule = true;
exports.isPalindrome = void 0;
// @lc code=start
function isPalindrome(x) {
    if (!x && x !== 0)
        return false;
    var xStr = x.toString();
    var start = 0;
    var end = xStr.length - 1;
    while (start <= end && xStr[start] === xStr[end]) {
        start++;
        end--;
    }
    if (start > end)
        return true;
    return false;
}
exports.isPalindrome = isPalindrome;
;
// @lc code=end
