/* eslint-disable no-console */
import { generateNumberArr, quickSort1 } from './src/algorthms/sort';

/**
 * sort测试环境：
 * Mac mini（2018）
 * CPU: 3 GHz 六核Intel Core i5
 * 内存: 16 GB 2667 MHz DDR4
 * 显卡: Intel UHD Graphics 630 1536 MB
 */

/**
 * 选择排序测试
 * @param n 排序的元素个数
 * 测试结果：
 * selectionSort sort 1000 elements cost 0s 2313940 ns
 * selectionSort sort 10000 elements cost 0s 124066985 ns
 * selectionSort sort 100000 elements cost 13s 504086102 ns
 * selectionSort sort 1000000 elements cost 1830s 451392890 ns
 *
 * js中数组的sort方法的排序测试：
 * selectionSort sort 1000000 elements cost 0s 656507961 ns
 *
 * quickSort
 * quickSort sort 1000000 elements cost 0s 526994561 ns
 * quickSort1 sort 1000000 elements cost 0s 117012931 ns
 *
 * insertSort
 * insertSort sort 100000 elements cost 2s 756956728 ns
 * insertSort sort 1000000 elements cost 294s 470174048 ns
 *
 * shellSort
 * shellSort sort 100000 elements cost 9s 476744528 ns
 */
const testSort = (n: number) => {
  const a = generateNumberArr(n);
  const startTime = process.hrtime();
  quickSort1(a, 0, a.length);
  const costTime = process.hrtime(startTime);
  console.log(`selectionSort sort ${a.length} elements cost ${costTime[0]}s ${costTime[1]} ns`);
};
// testSort(5);
// testSort(1000);
// testSort(10000);
// testSort(100000);
testSort(1000000);
