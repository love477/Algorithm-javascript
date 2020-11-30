const fibonacciMap = new Map<number, number>();
/**
 * 斐波那契数列
 * @param n       
 * 测试环境：  
 * Mac mini（2018）  
 * CPU: 3 GHz 六核Intel Core i5  
 * 内存: 16 GB 2667 MHz DDR4  
 * 显卡: Intel UHD Graphics 630 1536 MB   
 * 测试结果：  
 * fibonacci(20) cost 0s 1050101 ns  
 * fibonacci(40) cost 1s 282367588 ns  
 * fibonacci(50) cost 166s 192944913 ns
 */
export const fibonacci = (n: number): number => {
  if (n < 0) throw new Error('n must >= 0');
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n-1) + fibonacci(n-2);
}

/**
 * 带记忆的斐波那契数列(Fibonacci Memoized)
 * @param n 
 * 测试环境：  
 * Mac mini（2018）  
 * CPU: 3 GHz 六核Intel Core i5  
 * 内存: 16 GB 2667 MHz DDR4  
 * 显卡: Intel UHD Graphics 630 1536 MB   
 * 测试结果： 
 * fibonacciDP(100) cost 0s 9799690 ns
 */
export const fibonacciMemoized = (n: number): number => {
  if (n < 0) throw new Error('n must >= 0');
  if (n === 0) return 0;
  if (n === 1) return 1;
  const res = fibonacciMap.get(n);
  if (res) {
    return res;
  }
  const r = fibonacciMemoized(n-1) + fibonacciMemoized(n-2);
  fibonacciMap.set(n, r);
  return r;
}

/**
 * 自底向上斐波那契数列
 * @param n
 * 测试环境：  
 * Mac mini（2018）  
 * CPU: 3 GHz 六核Intel Core i5  
 * 内存: 16 GB 2667 MHz DDR4  
 * 显卡: Intel UHD Graphics 630 1536 MB   
 * 测试结果：  
 * fibonacci(100) cost 0s 946281 ns
 */
export const fibonacciBottom = (n: number): number => {
  if (n < 0) throw new Error('n must >= 0');
  fibonacciMap.set(0, 0);
  fibonacciMap.set(1, 1);
  for (let i=2; i<=n; i++) {
    let r: number = 0;
    for (let j=2; j<=i; j++) {
      if (fibonacciMap.get(j-1) === undefined || fibonacciMap.get(j-2) === undefined) {
        throw new Error(`err: ${j-1}, ${j-2}`);
      }
      r = (fibonacciMap.get(j-1) as number) + (fibonacciMap.get(j-2) as number);
    }
    fibonacciMap.set(i, r);
  }
  return fibonacciMap.get(n) || -1;
}

function test(n: number) {
  const startTime = process.hrtime();
  const result = fibonacciBottom(n);
  const costTime = process.hrtime(startTime);
  console.log(`fibonacci(${n}) = ${result} cost ${costTime[0]}s ${costTime[1]} ns`);
}

test(10000)