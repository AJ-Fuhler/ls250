function findNextLetter(chars, key) {
  let left = 0;
  let right = chars.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (chars[mid] <= key) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left < chars.length ? chars[left] : chars[0];
}

console.log(findNextLetter(['b', 'd', 'f'], 'a') === 'b');
console.log(findNextLetter(['b', 'd', 'f'], 'c') === 'd');
console.log(findNextLetter(['b', 'd', 'f'], 'f') === 'b');
console.log(findNextLetter(['a', 'a', 'b', 'c'], 'a') === 'b');
console.log(findNextLetter(['c', 'f', 'j'], 'c') === 'f');
console.log(findNextLetter(['a', 'c', 'f', 'h', 'i', 'j'], 'g') === 'h');
// All test cases should log true.