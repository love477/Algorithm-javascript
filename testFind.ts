import { generateNumberArr, quickSort1 } from './src/algorthms/sort';
import { twoNumberSum, twoNumberSum2, twoNumberSum3, binarySearch } from './src/algorthms/find';

/**
 * sort测试环境：  
 * Mac mini（2018）  
 * CPU: 3 GHz 六核Intel Core i5  
 * 内存: 16 GB 2667 MHz DDR4  
 * 显卡: Intel UHD Graphics 630 1536 MB  
 */

function testTwoNumberSum(a: number[], sum: number) {
  const startTime = process.hrtime();
  const result = twoNumberSum(a, sum);
  const costTime = process.hrtime(startTime);
  console.log(`find twoNumberSum in ${a.length} elements cost ${costTime[0]}s ${costTime[1]} ns`);
}

function testTwoNumberSum2(a: number[], sum: number) {
  const startTime = process.hrtime();
  const result = twoNumberSum2(a, sum);
  const costTime = process.hrtime(startTime);
  console.log(`find twoNumberSum2 in ${a.length} elements cost ${costTime[0]}s ${costTime[1]} ns`);
}

function testTwoNumberSum3(a: number[], sum: number) {
  const startTime = process.hrtime();
  const result = twoNumberSum3(a, sum);
  const costTime = process.hrtime(startTime);
  console.log(`find twoNumberSum3 in ${a.length} elements cost ${costTime[0]}s ${costTime[1]} ns`);
}

// const a = generateNumberArr(100000);
// testTwoNumberSum(a, 28890);
// testTwoNumberSum2(a, 28890);
// testTwoNumberSum3(a, 28890);
/**
 * 查找数组中两数之和为sum的元素
 * 测试结果：  
 * find twoNumberSum in 100000 elements cost 23s 263844617 ns
 * find twoNumberSum2 in 100000 elements cost 0s 16012009 ns
 * find twoNumberSum3 in 100000 elements cost 0s 14348794 ns
 */

function testBinarySearch() {
  const sets = generateNumberArr(100000);
  quickSort1(sets, 0, sets.length);
  const startTime = process.hrtime();
  const res = binarySearch(sets, 7890, 0, sets.length-1);
  const costTime = process.hrtime(startTime);
  console.log(`find binarySearch in ${sets.length} elements cost ${costTime[0]}s ${costTime[1]} ns`);
  console.log('res: ', res);
}
testBinarySearch();