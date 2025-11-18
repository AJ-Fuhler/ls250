function reverseWord(word) {
  let start = 0;
  let end = word.length - 1;
  let wordArray = word.split('');

  while (start < end) {
    [wordArray[start], wordArray[end]] = [wordArray[end], wordArray[start]];
    start++;
    end--;
  }

  return wordArray.join('');
}

function reverseWords(string) {
  return string
    .split(' ')
    .map(reverseWord)
    .join(' ');
}

console.log(reverseWords("Hello World") === "olleH dlroW");
console.log(reverseWords("JavaScript is fun") === "tpircSavaJ si nuf");
console.log(reverseWords("Coding in the sun") === "gnidoC ni eht nus");
console.log(reverseWords("Launch School") === "hcnuaL loohcS");