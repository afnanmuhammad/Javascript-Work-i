// function addname() {
//     console.log("Hi How are you");
// }

// // Next function (Multiple use function)

// function Afnan() {
//     console.log('You are name is ......');
// }

// function ABC() {
//     console.log("A B C is word of englih ");
// }

// // function calling 

// addname();
// Afnan();
// ABC();
// addname();
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function parameters

// function prmtr(a, b, c) {
//     console.log("A is parameter That we passed argument  for A = " + a,
//         "B is second parameter That we passed argument for B " + b, "      " + c);
// }

// //function calling

// prmtr(20, 50, 60);

// function sum(A, B, C, D, E) {
//     console.log(A + B + C + D + E);
// }

// //calling function
// sum(10, 20, 30, 40, 50);

//Return function
function sum(a, b) {
    let result = a + b;
    return result;
}

let ret = sum(4, 4);

if (ret > 0) {
    console.log('true')
}
else {

    console.log('false ')
}


// sum(4, 4);
// console.log(sum(5, 5));