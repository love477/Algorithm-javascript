export const bigintSum = (a: string, b: string) => {
  const arrA = a.split('');
  const arrB = b.split('');
  const arrSum = [];
  let carry = 0;
  while (arrA.length > 0 || arrB.length > 0) {
    const ai = arrA.pop() || '0';
    const bi = arrB.pop() || '0';
    const sum = parseInt(ai, 10) + parseInt(bi, 10) + carry;
    if (sum > 10) {
      carry = 1;
      arrSum.unshift(sum - 10);
    } else {
      arrSum.unshift(sum);
    }
  }

  return arrSum.join('');
}

