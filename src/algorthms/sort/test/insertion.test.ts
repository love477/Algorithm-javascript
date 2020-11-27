import insertion from '../insertion';

const arr = [];
const length = 100000;
while (arr.length < length) {
  arr.push(Math.floor(Math.random() * length));
}
// console.log('before sort: ', arr);
const startTime = process.hrtime();
insertion(arr);
// console.log('after sort: ', arr);
const diff = process.hrtime(startTime);
console.log(`sort finished in: ${diff[0]} s, ${diff[0] * 1e9 + diff[1]} ns`);

