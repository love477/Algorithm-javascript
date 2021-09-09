function isValid2(s: string): boolean {
    if (s[0] !== '(' && s[0] !== '{' && s[0] !== '[') {
      return false;
    }
    const stack: string[] = [];
    for (let i = 0; i < s.length; i++) {
      const cur = stack.pop()
      if (!cur) {
        stack.push(s[i]);
        continue;
      }
      if (cur === '(' && s[i] === ')') {
        continue;
      }
      if (cur === '{' && s[i] === '}') {
        continue;
      }
      if (cur === '[' && s[i] === ']') {
        continue;
      }
    }
    return stack.length === 0;
};