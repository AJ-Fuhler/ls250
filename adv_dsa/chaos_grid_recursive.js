function getSquareAbove(indices) {
  return [indices[0] - 1, indices[1]];
};

function getSquareToLeft(indices) {
  return [indices[0], indices[1] - 1];
}

function chaosInTheGrid(grid) {
  let rows = grid.length;
  let cols = grid[0].length;

  let cache = new Map();

  function recursive([row, col]) {
    if (row === 0 || col === 0) return 1;

    const key = `${row} ${col}`;
    if (cache.has(key)) return cache.get(key);

    const above = getSquareAbove([row, col]);
    const left = getSquareToLeft([row, col]);

    const paths = recursive(above) + recursive(left);
    cache.set(key, paths);
    return paths;
  }

  return recursive([rows - 1, cols - 1]);
}