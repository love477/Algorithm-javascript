/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
  let i = 0;
  let j = height.length-1;
  const getMaxArea = (height: number[], i:number, j:number) => Math.abs(j-i) * Math.min(height[i], height[j]);
  let maxArea = 0;
  while(i<j) {
    if (height[i] < height[j]) {
      maxArea = Math.max(maxArea, getMaxArea(height, i, j));
      i++;
    } else {
      maxArea = Math.max(maxArea, getMaxArea(height, i, j));
      j--;
    }
  }
  return maxArea;
};
// @lc code=end

