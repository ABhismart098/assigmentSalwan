const { mergeTimeRanges } = require('./module');

// Example 1
const ranges1 = [
  [1000, 2000],
  [2500, 4000],
  [3900, 4100],
  [8000, 9000],
  [9050, 9500]
];
const threshold1 = 200;
console.log('Example 1 Output:');
console.log(mergeTimeRanges(ranges1, threshold1));

// Example 2
const ranges2 = [
  [0, 10],
  [15, 20],
  [25, 30]
];
const threshold2 = 4;
console.log('\nExample 2 Output:');
console.log(mergeTimeRanges(ranges2, threshold2));

// Example 3
const ranges3 = [
  [0, 10],
  [12, 15],
  [17, 25],
  [27, 35]
];
const threshold3 = 3;
console.log('\nExample 3 Output:');
console.log(mergeTimeRanges(ranges3, threshold3));
