import selection from '../selection';

const arr = [];
const length = 100000;
while (arr.length < length) {
  arr.push(Math.floor(Math.random() * length));
}
const startTime = process.hrtime();
selection(arr);
const diff = process.hrtime(startTime);
console.log(`sort finished in: ${diff[0]} s, ${diff[0] * 1e9 + diff[1]} ns`);
