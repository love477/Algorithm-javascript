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