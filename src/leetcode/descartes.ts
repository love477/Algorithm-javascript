const result: string[][] = [];

export function descartes(input: string[][], index: number, tempResult: string[] = []) {
  if(index >= input.length) {
    result.push(tempResult);
    return;
  }
  const arr = input[index];
  for(let v of arr) {
    const tempResult1 = tempResult.slice(0, tempResult.length);
    tempResult1.push(v);
    descartes(input, index+1, tempResult1);
  }
}
descartes([['a', 'b'], ['c', 'd'], ['e', 'f', 'g']], 0);
const a = result.map(v => v.toString().replace(/,/g, ''))

console.log(a);
// 分先后、审大小、定善恶、知行合一