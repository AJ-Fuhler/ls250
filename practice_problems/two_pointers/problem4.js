function assignTreats(appetite, treats) {
  appetite.sort((a, b) => a - b);
  treats.sort((a, b) => a - b);

  let satisfiedPets = 0;
  let appetitePointer = 0;
  let treatsPointer = 0;

  while (appetitePointer < appetite.length && treatsPointer < treats.length) {
    if (treats[treatsPointer] >= appetite[appetitePointer]) {
      satisfiedPets++;
      appetitePointer++;
    }
    treatsPointer++;
  }

  return satisfiedPets;
}

console.log(assignTreats([3, 4, 2], [1, 2, 3]) === 2);
console.log(assignTreats([1, 5], [5, 5, 6]) === 2);
console.log(assignTreats([1, 2, 3], [3]) === 1);
console.log(assignTreats([2], [1, 2, 1, 1]) === 1);
console.log(assignTreats([4, 3, 1], [2, 1, 3]) === 2);
console.log(assignTreats([1,2,3], [1,2,3]) === 3);
console.log(assignTreats([4, 5, 6], [1,2,3]) === 0);

// All test cases should log true.