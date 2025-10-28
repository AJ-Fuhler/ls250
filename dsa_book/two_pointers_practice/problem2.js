function isConsonant(char) {
  return /[a-z]/i.test(char) && !/[aeiou]/i.test(char);
}

function reverseConsonants(str) {
  let result = [...str];
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (isConsonant(result[start]) && isConsonant(result[end])) {
      [result[start], result[end]] = [result[end], result[start]];
      start++;
      end--;
    } else if (!isConsonant(result[start])) {
      start++;
    } else {
      end--;
    }
  }

  return result.join('');
}

console.log(reverseConsonants("") === "");
console.log(reverseConsonants("s") === "s");
console.log(reverseConsonants("HELLO") === "LELHO");
console.log(reverseConsonants("leetcode") === "deectole");
console.log(reverseConsonants("example") === "elapmxe");
console.log(reverseConsonants("Consonants") === "sotnonasnC");