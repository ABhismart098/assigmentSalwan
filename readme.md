# Merge Discontinuous Time Ranges

This Node.js module merges overlapping or close time ranges based on a given threshold.

---

## Features

- Handles unsorted input ranges.
- Merges overlapping ranges.
- Merges ranges separated by gaps smaller than or equal to a threshold.
- Returns sorted, non-overlapping intervals.
- Simple and lightweight, no external libraries required.

---

## Installation

1. Clone the repository or download the files.
2. Ensure Node.js (v12+) is installed.

---

## Usage

```javascript
const { mergeTimeRanges } = require('./my-module.js');

// Example input
const ranges = [
  [1000, 2000],
  [2500, 4000],
  [3900, 4100],
  [8000, 9000],
  [9050, 9500]
];

const threshold = 200;

const merged = mergeTimeRanges(ranges, threshold);
console.log(merged);
