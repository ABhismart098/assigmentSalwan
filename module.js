

const mergeTimeRanges = (ranges, threshold) => {
  if (!Array.isArray(ranges) || ranges.length === 0) return [];

  // Sort by start time
  const sorted = ranges.slice().sort((a, b) => a[0] - b[0]);

  const merged = [];
  let current = sorted[0];

  for (let i = 1; i < sorted.length; i++) {
    const [start, end] = sorted[i];
    const [currStart, currEnd] = current;

    // Merge if overlapping or within threshold
    if (start - currEnd <= threshold) {
      // Expand current interval
      current = [currStart, Math.max(currEnd, end)];
    } else {
      // Push current and reset
      merged.push(current);
      current = [start, end];
    }
  }

  // Add the last interval
  merged.push(current);

  return merged;



  // Step 4: Push the last range
  merged.push([currentStart, currentEnd]);

  return merged;
};

module.exports = {
  mergeTimeRanges
};
