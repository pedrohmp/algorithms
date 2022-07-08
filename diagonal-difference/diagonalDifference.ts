function diagonalDifference(matrix) {    
    let sumDiagonals = { primary: 0, secondary: 0 };
    let matrixLength = matrix.length;
    for (var i = 0; i < matrixLength; i++) {
        sumDiagonals.primary += matrix[i][i];
        sumDiagonals.secondary += matrix[i][matrixLength - i - 1];
    }
   return Math.abs(sumDiagonals.primary - sumDiagonals.secondary);
}
