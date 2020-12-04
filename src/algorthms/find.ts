import { generateNumberArr } from './sort';

interface ITwoNumberSum {
  i: number,
  j: number
}

export const twoNumberSum = (arr: number[], sum: number): ITwoNumberSum[] => {
  const result: ITwoNumberSum[] = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        const res = {
          i: arr[i],
          j: arr[j]
        };
        result.push(res);
      }
    }
  }
  return result;
}

export const twoNumberSum2 = (arr: number[], sum: number): ITwoNumberSum[] => {
  const result: ITwoNumberSum[] = [];
  const arrMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    arrMap.set(arr[i], arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    const left = sum - arr[i];
    if (arrMap.get(left)) {
      result.push({
        i: arr[i],
        j: arrMap.get(left)
      });
    }
  }
  return result;
}

export const twoNumberSum3 = (arr: number[], sum: number): ITwoNumberSum[] => {
  const result: ITwoNumberSum[] = [];
  const arrMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    const left = sum - arr[i];
    if (arrMap.get(left)) {
      result.push({
        i: arr[i],
        j: arrMap.get(left)
      });
    }
    arrMap.set(arr[i], arr[i]);
  }
  return result;
}