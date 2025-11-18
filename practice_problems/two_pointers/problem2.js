// Original Solution

function findAverages(nums, k) {
  let anchor = 0;
  let runner = 1;
  let currentSum = nums[anchor];

  while (runner <= nums.length) {
    if (runner - anchor < k) {
      currentSum += nums[runner];
      runner++;
    } else {
      nums[anchor] = currentSum / k;
      anchor++;
      currentSum = nums[anchor];
      runner = anchor + 1;
    }
  }

  nums.length = anchor;
  return nums;
}

// LS Solution

function findAverages(nums, k) {
  let result = [];
  let windowSum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    windowSum += nums[right];

    if (right >= k - 1) {
      result.push(windowSum / k);
      windowSum -= nums[left];
      left++;
    }
  }

  return result;
}

console.log(findAverages([1, 2, 3, 4, 5, 6], 3)); // [ 2, 3, 4, 5 ]
console.log(findAverages([1, 2, 3, 4, 5], 2));    // [1.5, 2.5, 3.5, 4.5]
console.log(findAverages([10, 20, 30, 40, 50], 4)); // [ 25, 35 ]
console.log(findAverages([5, 5, 5, 5, 5], 1));      // [ 5, 5, 5, 5, 5 ]
console.log(findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)); // [2.2, 2.8, 2.4, 3.6, 2.8]