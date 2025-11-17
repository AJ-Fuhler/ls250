function chaosInTheGridWithCats(grid) {
  let rows = grid.length;
  let cols = grid[0].length;

  let cache = new Map();

  function recursive(row, col) {
    if (row < 0 || col < 0 || grid[row][col] === "C") return 0;
    if (row === 0 && col === 0) return 1;

    const key = `${row} ${col}`;
    if (cache.has(key)) return cache.get(key);

    const paths = recursive(row - 1, col) + recursive(row, col - 1);
    cache.set(key, paths);
    return paths;
  }

  return recursive(rows - 1, cols - 1);
}

// Test Cases:

const grid1 = [
  ["", "C"],
  ["", ""],
];
const grid2 = [["", "C"]];
const grid3 = [
  ["", "", ""],
  ["", "C", ""],
  ["", "", ""],
];
const grid4 = [
  ["", "", "", "", "C"],
  ["", "C", "", "", ""],
  ["", "", "", "C", ""],
];
const grid5 = [
  ["", "", "", "", "C", ""],
  ["", "C", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "C", "", ""],
  ["", "C", "", "", "", ""],
  ["", "", "", "", "", ""],
];

console.log(chaosInTheGridWithCats(grid1) === 1);
console.log(chaosInTheGridWithCats(grid2) === 0);
console.log(chaosInTheGridWithCats(grid3) === 2);
console.log(chaosInTheGridWithCats(grid4) === 2);
console.log(chaosInTheGridWithCats(grid5) === 43);