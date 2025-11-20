// Write a function `longestSubstringLength` that finds the
// length of the longest substring without duplicates in a
// given string. The function should take a string as input
// and return an integer representing the length of the longest
// substring without any repeating characters. The input
// string will only contain lowercase characters.

// Example:
// Input: s = "helloworld"
// Output: 5
// Explanation: The longest substring without repeating characters is "world",
// which has a length of 5.

// brute-force solution

function longestSubstringLength(string) {
  let longest = 0;
  let current = [];
  for (let char of string) {
    let index = current.indexOf(char);
    if (index !== -1) {
      longest = Math.max(current.length, longest);
      current = current.slice(index + 1);
    }
    current.push(char);
  }

  return Math.max(longest, current.length);
}

// Optimized solution using anchor-runner and Map
function longestSubstringLength(string) {
  let anchor = 0;
  let runner = 0;
  let charIndex = new Map();
  let result = 0;

  while (runner < string.length) {
    const char = string[runner];
    if (charIndex.has(char)) {
      if (charIndex.get(char) >= anchor) {
        anchor = charIndex.get(char) + 1;
      }
    }
    const currLength = runner - anchor + 1;
    result = Math.max(result, currLength);
    charIndex.set(char, runner);
    runner++;
  }

  return result;
}

console.log(longestSubstringLength('abcdecbb'));
console.log(longestSubstringLength("a") === 1);
console.log(longestSubstringLength("aa") === 1);
console.log(longestSubstringLength("ab") === 2);
console.log(longestSubstringLength("abba") === 2);
console.log(longestSubstringLength("abc") === 3);
console.log(longestSubstringLength("helloworld") === 5);
console.log(longestSubstringLength("dvdf") === 3);
console.log(longestSubstringLength("tmmzuxt") === 5);
console.log(longestSubstringLength("thisishowwedoit") === 6);
console.log(longestSubstringLength("longestsubstring") === 8);
console.log(longestSubstringLength("aabbccddeffghijklmno") === 10);
console.log(longestSubstringLength("abcdefghijklmnopqrstuvwxyz") === 26);