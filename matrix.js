var matrixExample = [
    [ 1, 2, 3, 4 ],
    [ 2, 1, 4, 3 ],
    [ 3, 4, 1, 2 ],
    [ 4, 3, 2, 1 ]
  ];
 
 function sumUpDiagonals(matrix) {
   var sumDiagonals = {diagonal: 0},
     matrixLength = matrix.length;
 
   for (var i = 0; i < matrixLength; i++) {
     sumDiagonals.diagonal += matrix[i][i];
     
   }
   return sumDiagonals
 }
 
 console.log(sumUpDiagonals(matrixExample))