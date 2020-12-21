function isPalindrome(x: number): boolean {
  if(!x && x !== 0) return false;
  const xStr = x.toString();
  let start = 0;
  let end = xStr.length-1;
  while(start <= end && xStr[start] === xStr[end]) {
    start++;
    end--;
  }
  if(start > end) return true;
  return false;
};
console.log(isPalindrome(0));