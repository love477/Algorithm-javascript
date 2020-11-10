import { generateNumberArr, selectionSort } from './src/sort';

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
 * js中数组的sort方法的排序测试：  
 * selectionSort sort 1000000 elements cost 0s 656507961 ns
 */
const testSelectionSort = (n: number) => {
  const a = generateNumberArr(n);
  const startTime = process.hrtime();
  selectionSort(a);
  // a.sort();
  const costTime = process.hrtime(startTime);
  console.log(`selectionSort sort ${a.length} elements cost ${costTime[0]}s ${costTime[1]} ns`);
};
// testSelectionSort(1000);
// testSelectionSort(10000);
// testSelectionSort(100000);
// testSelectionSort(1000000);

