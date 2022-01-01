// program to find the minimum number among three numbers
const num1 = 70;
const num2 = 45;
const num3 = 67;
let min;

if(num1 <= num2 && num1 <= num3) {
    min = num1;
}
else if (num2 <= num1 && num2 <= num3) {
    min = num2;
}
else {
    min = num3;
}

console.log("The smallest number is " + min);
