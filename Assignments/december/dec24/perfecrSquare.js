//Write a program to check the given number is a perfect square or not! (Don't use function)

const perfectSquare = num => {
   let i = 1;
      while(i * i <= num){
         if(i * i !== num){
            i++;
            continue;
         };
      return true;
   };
   return false;
};
console.log(perfectSquare(81));
console.log(perfectSquare(25));
console.log(perfectSquare(99));
console.log(perfectSquare(50));
