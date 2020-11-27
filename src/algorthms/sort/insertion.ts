import { exch } from './utils';

export default (arr: number[]) => {
  if (!arr || arr.length < 2) {
    console.log('arr is illegal or arr.length < 2');
    return;
  }
  for(let i = 1; i < arr.length; i++) {
    for(let j = i; j > 0; j--) {
      if(arr[j] < arr[j - 1]) {
        exch(arr, j,  j- 1);
      }
    }
  }
  return arr;
}