function higherOrderFunc(x, functionality) {
    var result = functionality(x);
    return result;
    // console.log(functionality);
}

var mulBy4 = function(n){
    // document.getElementById("GFG").innerHTML = n * 4;
    return n*4;
    
};
var addBy9 = function(n){

    return n+9;
};

var x = 10;

var mul = higherOrderFunc(x, mulBy4);
var add = higherOrderFunc(x, addBy9);
// function add{
    
// }
// console.log(mul);
// console.log(add);

document.write("Mul by 4 is " +mul+ " and Add by 9 is ");
document.write(add);