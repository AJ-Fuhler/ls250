function moveOnes(nums) {
  let idx = 0;
  let counter = 0;

  while (counter < nums.length) {
    if (nums[idx] === 1) {
      nums.splice(idx, 1);
      nums.push(1);
    } else {
      idx++;
    }
    counter++;
  }

  return nums;
}