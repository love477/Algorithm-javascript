export function checkDifferent(iniString: string) {
  if (!iniString) {
    return false;
  }
  for (let index = 0; index < iniString.length; index++) {
    const regexp = new RegExp(iniString.charAt(index), 'g');
    const result = iniString.match(regexp);
    if (result && result.length > 1) {
      return false
    } 
  }
  return true;
}

console.log('result: ', checkDifferent('bcda'));