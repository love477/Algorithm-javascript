/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
export function plusOne(digits: number[]): number[] {
  let temp = 0;
  const MAX = 10;
  const resultArr: number[] = [];
  digits[digits.length - 1] = digits[digits.length - 1] + 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] += temp;
    temp = 0;
    console.log(digits[i]);
    if (digits[i] >= MAX) {
      resultArr[resultArr.length] = digits[i] - MAX;
      temp = 1;
    } else {
      resultArr[resultArr.length] = digits[i];
    }
  }
  if (temp === 1) {
    resultArr[resultArr.length] = temp;
  }
  // eslint-disable-next-line no-plusplus
  for (let i = 0, j = resultArr.length - 1; i < j; i++, j--) {
    const t = resultArr[i];
    resultArr[i] = resultArr[j];
    resultArr[j] = t;
  }
  return resultArr;
}

console.log(plusOne([8, 9, 9, 9]));
