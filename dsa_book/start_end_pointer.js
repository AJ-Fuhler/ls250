function findPair(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let currentSum = nums[start] + nums[end];

    if (currentSum === target) {
      return [nums[start], nums[end]];
    } else if (currentSum < target) {
      start++;
    } else {
      end--;
    }
  }

  return null;
}

const nums1 = [1, 3, 6, 7, 8, 12];
const target1 = 14;
console.log(findPair(nums1, target1)); // Output: [6, 8]

const nums2 = [2, 6, 8, 10];
const target2 = 17;
console.log(findPair(nums2, target2)); // null