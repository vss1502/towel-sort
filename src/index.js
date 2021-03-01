
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  }
  for (let i=1; i<matrix.length; i++) {
    matrix[i].reverse();
    i++;
  }

  let narr = matrix.flat();

 
  return narr;
}
