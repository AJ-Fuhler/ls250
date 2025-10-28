function isConsonant(char) {
  return /[a-z]/i.test(char) && !/[aeiou]/i.test(char);
}

function reverseConsonants(str) {
  let result = [...str];
  let lastReplacedIndex = result.length - 1;

  for (let i = 0; i < result.length; i++) {
    if (isConsonant(result[i])) {
      for (let j = lastReplacedIndex; j > i; j--) {
        if (isConsonant(result[j]) && j < lastReplacedIndex) {
          [result[i], result[j]] = [result[j], result[i]];
          lastReplacedIndex = j;
          break;
        }
      }
    }
  }

  return result.join('');
}

console.log(reverseConsonants("HELLO"));
console.log(reverseConsonants('leetcode'));
