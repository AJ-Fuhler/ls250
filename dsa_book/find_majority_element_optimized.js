/*
--------------------- Problem ----------------------
Given an array of numbers, return its majority element.

The majority element is the value in the array that appears
as at least half of the elements in the array.

It is guaranteed that only one majority element exists in the array.

------------ **Requirements** -------------
Inputs: array of numbers
Output: boolean

Rules:

------------ Examples/Test Cases/Edge's ------------
console.log(findMajority([6, 4, 4, 6, 4]) === 4);
console.log(findMajority([4, 5, 2, 5, 5, 5, 1]) === 5);
console.log(findMajority([1, 2, 1, 2, 2, 1, 2]) === 2);
console.log(findMajority([1, 2, 3, 1, 4, 4, 1, 1]) === 1);
console.log(findMajority([5, 5, 5]) === 5);

------------------ Data Structures ------------------
- hash table to store elements and their counts

-------------------- Algorithm ---------------------
(optimized):
1. create an empty hash table
2. for each element in the input array:
     - if a key exists that matches the element:
       - increment the count of the value that maps to key
       - if count >= length of the input array:
         - return element
     - add key to hash table (element) with a value of 1

              **** helper functions ****


---------------------- Notes -----------------------

*/

// optimized approach:

function findMajority(nums) {
  let numCount = {};
  let targetLength = Math.ceil(nums.length / 2);

  for (let num of nums) {
    numCount[num] = (numCount[num] || 0) + 1;

    if (numCount[num] >= targetLength) {
      return num;
    }
  }
}

console.log(findMajority([6, 4, 4, 6, 4]) === 4);
console.log(findMajority([4, 5, 2, 5, 5, 5, 1]) === 5);
console.log(findMajority([1, 2, 1, 2, 2, 1, 2]) === 2);
console.log(findMajority([1, 2, 3, 1, 4, 4, 1, 1]) === 1);
console.log(findMajority([5, 5, 5]) === 5);