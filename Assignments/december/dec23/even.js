// Write a program to print all even numbers less than or equal to n (n is an input which we take using prompt).
// var num = 20;

const num = parseInt(prompt("Enter a number: "));
 for( i = 2; i<=num; i++){
    if(i % 2 == 0){
        console.log(i);
    }
 }
