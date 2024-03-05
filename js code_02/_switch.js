const prompt = require('prompt-sync')();
const day = prompt("Enter your number");
num = Number.parseInt(day)                //for parseint to convert number 
//const name = prompt('enter your name ') for name

//let day = 1;

switch (day) {

    case 1:
        console.log("Today is Monday");
        break;

    case 2:
        console.log("Tody is Tuesday");
        break;

    case 3:
        console.log("Today is Wednesday");
        break;

    case 4:
        console.log("Today is Thursday");
        break;

    case 5:
        console.log("Tody is Firday");
        break;

    case 6:
        console.log("Today is saturday");
        break;

    case 7:
        console.log("Tody is sunday");
        break;

    default:
        console.log(" Enter valid day");


}