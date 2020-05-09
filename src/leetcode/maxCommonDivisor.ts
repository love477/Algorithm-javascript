export const maxCommonDivisior = (x: number, y: number) => {
  if (y === 0) {
    return x;
  }
  return maxCommonDivisior(x, x % y);
}
