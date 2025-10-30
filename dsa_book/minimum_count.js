function getNegativeCount(nums) {
  let left = 0;
  let right = nums.length - 1;
  let rightMostNegative = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] < 0) {
      rightMostNegative = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return rightMostNegative + 1;
}

function getPositiveCount(nums) {
  let left = 0;
  let right = nums.length - 1;
  let leftMostPositive = nums.length;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > 0) {
      leftMostPositive = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return nums.length - leftMostPositive;
}


function minimumCount(nums) {
  return Math.min(getPositiveCount(nums), getNegativeCount(nums));
}

console.log(minimumCount([-4, -3, -2, -1, 3, 4]) === 2);
console.log(minimumCount([-3, 1, 2, 3, 4, 5]) === 1);
console.log(minimumCount([-5, -4, -3, -2, -1]) === 0);
console.log(minimumCount([1, 2, 3, 4, 5]) === 0);
console.log(minimumCount([-2, -1, 1, 2]) === 2);
console.log(minimumCount([-7, -5, -4, 1, 2, 6, 10]) === 3);
console.log(minimumCount([-3, -2, -1, 0, 5, 6]) === 2);
console.log(minimumCount([-1, 0, 1]) === 1);
console.log(minimumCount([]) === 0);