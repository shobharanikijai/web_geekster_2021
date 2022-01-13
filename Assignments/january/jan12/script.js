//initialising a variable name data
  
var data = 0;
  
//printing default value of data that is 0 in h2 tag
document.getElementById("counting").innerText = data;
  
//creation of increment function
function increment() {
    data = data + 1;
    document.getElementById("counting").innerText = data;
}
//creation of decrement function
function decrement() {
    data = data - 1;
    document.getElementById("counting").innerText = data;
}























// let btnAdd = document.querySelector('#add');
// let btnSubtract = document.querySelector('#subtract');
// let input = document.querySelector('input');
// btnAdd.addEventListener('click', () =>{
//   input.value = parseInt(input.value) + 1;
// });
// btnSubtract.addEventListener('click', () =>{
//     input.value = parseInt(input.value) - 1;
// });