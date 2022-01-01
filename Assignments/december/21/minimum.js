
// program to find the minimum number among three numbers
const num1 = 70;
const num2 = 45;
const num3 = 67;
let minimum;

if(num1 <= num2 && num1 <= num3) {
    minimum = num1;
}
else if (num2 <= num1 && num2 <= num3) {
    minimum = num2;
}
else {
    minimum = num3;
}

console.log("The lowest number is " + minimum);
