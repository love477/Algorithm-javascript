export function generateNumberArr(length = 10): number[] {
  const min = 1;
  const max = 10 * length;
  const result = new Array<number>();
  for (let i = 0; i < length; i++) {
    const random = Math.ceil(Math.random() * max);
    result.push(random)
  }
  return result;
}

export function selectionSort(a: number[]) {
  if (!a || a.length < 2) {
    return;
  }
  for (let i = 0; i < a.length; i++) {
    let min = a[i];
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] < min) {
        a[i] = a[j];
        a[j] = min;
        min = a[i];
      }
    }
  }
}

export function insertSort(a: number[]) {
  if (!a || a.length < 2) {
    return;
  }
  for (let i = 0; i < a.length; i ++) {
    for (let j = i; j > 0; j--) {
      if (a[j] < a[j - 1]) {
        const temp = a[j];
        a[j] = a[j - 1];
        a[j - 1] = temp;
      }
    }
  }
}

export function shellSort(a: number[]) {
  const N = a.length;
  let h = 1;
  while (h < Math.floor(N/3)) {
    h = 3*h + 1;
  }
  while (h >= 1) {
    for (let i = 0; i < N; i++) {
      for (let j = i; j >= h; j-=h) {
        if (a[j] < a[j-h]) {
          const temp = a[j];
          a[j] = a[j-h];
          a[j-h] = temp;
        }
      }
    }
    console.log('h: ', h)
    h = Math.floor(h/3);
  }
}

export function quickSort(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr;
  }
  const tmp = arr[Math.floor(arr.length / 2)];
  const less = [];
  const greater = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < tmp) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  return quickSort(less).concat([tmp]).concat(quickSort(greater));
}

export function quickSort1(arr: number[], start: number, end: number) {
  if (start >= end) return;
  const temp = arr[end-1];
  let i = start;
  for (let j=start; j<end-1; j++){
    if(temp > arr[j]) {
      const v = arr[j];
      arr[j] = arr[i];
      arr[i] = v;
      i++;
    }
  }
  arr[end-1] = arr[i];
  arr[i] = temp;
  quickSort1(arr, start, i);
  quickSort1(arr, i+1, end);
}