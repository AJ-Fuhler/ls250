function chaosInTheGridWithCats(grid) {
  let rows = grid.length;
  let cols = grid[0].length;

  for (let col = 0; col < cols; col++) {
    grid[0][col] = grid[0][col] === "C" ? 0 : (col === 0 ? 1 : grid[0][col - 1]);
  }

  for (let row = 0; row < rows; row++) {
    grid[row][0] = grid[row][0] === "C" ? 0 : (row === 0 ? 1 : grid[row - 1][0]);
  }

  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      if (grid[row][col] === "C") {
        grid[row][col] = 0;
      } else {
        grid[row][col] = grid[row][col - 1] + grid[row - 1][col];
      }
    }
  }

  return grid[rows - 1][cols - 1];
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
console.log(chaosInTheGridWithCats(grid3)) // === 2);
console.log(chaosInTheGridWithCats(grid4) === 2);
console.log(chaosInTheGridWithCats(grid5)) // === 43);