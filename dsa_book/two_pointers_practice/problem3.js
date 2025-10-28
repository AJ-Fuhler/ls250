// function compressToDistinct(array) {
//   let distinctCount;
//   let indexesToDelete = [];

//   for (let idx = 0; idx < array.length; idx++) {
//     if (array.slice(0, idx).includes(array[idx])) {
//       indexesToDelete.push(idx);
//     }
//   }

//   for (let jdx = indexesToDelete.length - 1; jdx >= 0; jdx--) {
//     array.push(array.splice(indexesToDelete[jdx], 1)[0]);
//   }

//   distinctCount = array.length - indexesToDelete.length;
//   return distinctCount;
// }

// function compressToDistinct(array) {
//   let distinctCount;
//   let originalLength = array.length;
//   let idx = 0;

//   while (idx < array.length) {
//     if (array[idx - 1] === array[idx]) {
//       array.splice(idx, 1);
//     } else {
//       idx++;
//     }
//   }


//   distinctCount = array.length;
//   array.length = originalLength;
//   return distinctCount;
// }

function compressToDistinct(arr) {
  if (arr.length === 0) return 0;

  const distinct = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i] !== arr[i - 1]) {
      distinct.push(arr[i]);
    }
  }

  for (let i = 0; i < distinct.length; i++) {
    arr[i] = distinct[i];
  }

  return distinct.length;
}


function testCompressToDistinct(array, expectedLength) {
  const originalReference = array;
  const resultLength = compressToDistinct(array);
  const isSameObject = originalReference === array;
  const isLengthCorrect = resultLength === expectedLength;
  const isModifiedCorrectly = array
    .slice(0, expectedLength)
    .every((val, idx, arr) => idx === 0 || val > arr[idx - 1]);

  return isSameObject && isLengthCorrect && isModifiedCorrectly;
}

console.log(testCompressToDistinct([3, 3, 5, 7, 7, 8], 4));
console.log(testCompressToDistinct([1, 1, 2, 2, 2, 3, 4, 4, 5], 5));
console.log(testCompressToDistinct([0], 1));
console.log(testCompressToDistinct([-5, -3, -3, -1, 0, 0, 0, 1], 5));
console.log(testCompressToDistinct([6, 6, 6, 6, 6, 6, 6], 1));
