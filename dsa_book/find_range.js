function findLeftMostIndex(nums) {
  let left = 0;
  let right = nums.length - 1;
  let leftMost = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === 3) {
      leftMost = mid;
      right = mid - 1;
    } else if (nums[mid] < 3) {
      left = mid + 1;
    } else {
      right = mid - 1;

    }
  }

  return leftMost;
}

function findRightMostIndex(nums) {
  let left = 0;
  let right = nums.length - 1;
  let rightMost = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === 3) {
      rightMost = mid;
      left = mid + 1;
    } else if (nums[mid] < 3) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return rightMost;
}

function findRange(nums) {
  let leftIndex = findLeftMostIndex(nums);
  let rightIndex = findRightMostIndex(nums);

  return [leftIndex, rightIndex];
}

console.log(findRange([1, 2, 3, 3, 3, 3, 3, 4, 5])) // [2, 6];
console.log(findRange([1, 2, 5, 5, 6, 9 , 10])); // [-1, -1];