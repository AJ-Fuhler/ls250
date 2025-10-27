function findPair(nums) {
  const numMap = new Map();
  const targetNumber = 10;

  for (let idx = 0; idx < nums.length; idx++) {
    const complement = targetNumber - nums[idx];

    if (numMap.has(complement)) {
      return [complement, nums[idx]];
    }

    numMap.set(nums[idx], idx);
  }

  return null;
}

console.log(findPair([2, 3, 9, 7])); // Output: [3, 7]
console.log(findPair([10, 6, -1, 2])); // null
console.log(findPair([1, 2, 5, 6])); // null
console.log(findPair([1, 3, 6, 10, 4, 5])); // [6, 4]
console.log(findPair([4, -5, 3, 15, 5])); // [-5, 15]