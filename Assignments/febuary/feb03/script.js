var operator = prompt("Enter operation '+' or '*'");
var num1 = parseInt(prompt("Enter num1"));
var num2 = parseInt(prompt("Enter num2"));
var num3 = parseInt(prompt("Enter num3"));
var arr = []
arr.push(num1)
arr.push(num2)
arr.push(num3)
console.log(arr);

if(operator == "+"){
    var a = add()
    document.write(`The addition of ${num1} + ${num2} + ${num3} is ${a}`);
}
if(operator == "*"){
    var m = mul()
    document.write(`The multiplication of ${num1} * ${num2} * ${num3} is ${m}`);
}

function add(){
    var ans = 0;
    for(let i = 0; i <arr.length; i++){
        ans += arr[i]
    }
    return ans;
}
function mul(){
    var mull = 1;
    for(let i = 0; i <arr.length; i++){
        mull *= arr[i]
    }
    return mull;
}
