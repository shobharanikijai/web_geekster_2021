var matrix =[
    [4, 3, 2, 4],
    [9, 1, 5, 6],
    [2, 7, 9, 8], 
    [8, 5, 2, 0], ];
  
    function addDiagonal(){
        let sum = 0;
        for(var i= 0; i< matrix.length; i++){
            for(var j=0; j<matrix[i].length;j++){
                if(i===j){
                    sum += matrix[i][j];
                }
            }
        }
        return sum;
    }
    var result = addDiagonal();
    document.write(result ," is the sum of elements of diagonal from top left to bottom right");