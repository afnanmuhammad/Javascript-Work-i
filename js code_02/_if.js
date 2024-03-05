// let x = 10;
// let y = 3;
//  if(x == y){
//     console.log("correct");
//  }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>

// logical operater (&&, ||, !)

// ifelse statment

// let a =10;
// let b = 5;

// if(a < b ){
//   console.log("a is gretate for b");
// }
// else{
//   console.log("b is lessthan for a");
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++> 

//Multiple elseif
// //  let per = 100;

// //  if(per >= 80 && per <= 100){
// //   console.log("Your one Gerade");
// //  }

// //  else if(per >= 60 && per < 80){
// //   console.log("Your Greade is Two");
// //  }

// //  else if(per >= 45 && per <60 ){
// //   console.log("Your Greade is Three");
// // }

// // else if(per >= 33 && per < 45){
// //   console.log("Your Greade Four");
// // }

// // else if(per < 33){
// //   console.log("Your fail");
// // }

// else{
//   console.log("Enter valaid Numbe");
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>

//Ternary Operater in else if

// let x = 50;
// let y;

//  if(x == 500)? y = "Ture" : y = "False";
//  console.log(y);

//  Next Method with message

// y = "Value is " + (x ==! 2000 ? y = "True" : y = "False");
// console.log(y);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>

// let prompt = require('prompt-sync')()
// let a = prompt('Enter your number')
// let b = prompt('Enter your number')
//let b = 1;


// if (a > b) {
//     console.log("A is Greater than form B ");
// }

// else if (a < b) {
//     console.log('B is greater then A')
// }

// else if (a == b) {
//     console.log('A is equal to B')
// }

// else if (a != b) {
//     console.log('A is not (!=) equle to B')
// }
// else if (a === b) {
//     console.log(" They are equle data type and variable......")
// }

// else if (a = !b) {
//     console.log('A is not (=!) equle to B Right')
// }
// else if (a !== b) {
//     console.log(" They are (!==) not equle data type and variable......")
// }


// else {
//     console.log('you enter wrong number')
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>

// else {
//     console.log('B is less than for A ');
// }

// if (a < b) {
//     console.log("B is less than < ? ");
// }
// else {
//     console.log('B is less than form A');
// }

// if (a == b) {
//     console.log('That used for Equlety A == B');
// }
// else {
//     console.log('A & B are Equle')
// }
// if (a != b) {
//     console.log('A is != B or Not Equle');
// }
// else {
//     console.log('B is != A');
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>

let prompt = require('prompt-sync')()
let a = prompt('Enter your number')
a = Number.parseInt(a);
let b = prompt('Enter your number')
b = Number.parseInt(b);
let c = prompt('Enter your number')
c = Number.parseInt(c);
if (a + b == c) {
    console.log('A + B is equle to C');
}
else {
    console.log('A + B is not equle to C')
}