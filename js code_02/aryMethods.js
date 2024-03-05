//sort array sntx      Any Name Uses----> z.sort();  A B C D...............Z
const z = ['Muhammad Afnan', 'Kashif Rehman', 'Talha Usman', 'Aqib Ullah',
    'Numan Khan', 'Saud Iftikhar'];

z.sort();
console.log(z);
//*******************************************************************
//Reverse array method sntx a.reverse(); End come to First the First go to End;
const a = ['Muhammad Afnan', 'Kashif Rehman', 'Talha Usman', 'Aqib Ullah',
    'Numan Khan', 'Saud Iftikhar'];

a.reverse();
console.log(a);
//*********************************************************************
//pop(); is used for delete last value in array

const a = ['Muhammad Afnan', 'Kashif Rehman', 'Talha Usman', 'Aqib Ullah',
    'Numan Khan', 'Saud Iftikhar'];

a.pop();
console.log(a);
//***********************************************************************
// push is used for Enter last value (add new value) in array
const a = ['Muhammad Afnan', 'Kashif Rehman', 'Talha Usman', 'Aqib Ullah',
    'Numan Khan', 'Saud Iftikhar'];

a.push("Islamia College University", 201155);
console.log(a);
//*****************************************************************************
// shift is uesd opsite of pop that delete first element in array
const a = ['Muhammad Afnan', 'Kashif Rehman', 'Talha Usman', 'Aqib Ullah',
    'Numan Khan', 'Saud Iftikhar'];
console.log(a);

a.shift();
console.log(a);
//************************************************************************************
// // shift is uesd opsite of push that add new  first element in array
const a = ['Muhammad Afnan', 'Kashif Rehman', 'Talha Usman', 'Aqib Ullah',
    'Numan Khan', 'Saud Iftikhar'];
console.log(a);

a.unshift('Bangash');
console.log(a);
//************************************************************************************
// concat(); is used that make multiple array convert or pluse to single array--->(Marge) 
//That sore single caurrant variable.
//[1],[3],[5],[8]-------> [1,3,5,8] is called cancat functio.

onst a = ['Muhammad Afnan', 'Kashif Rehman', 'Talha Usman', 'Aqib Ullah',
    'Numan Khan', 'Saud Iftikhar'];
const b = ["Jamal", 'Satar', 'khuziafa'];
const d = [23, 56, 3, 2, 'Number'];

console.log(a, b, d);
const c = a.concat(b, d);

b = a.concat('Bangash', 'Famliy'); first method

console.log(c);
const a = ['Muhammad Afnan', 'Kashif Rehman', 'Talha Usman', 'Aqib Ullah',
    'Numan Khan', 'Saud Iftikhar'];
const b = ["Jamal", 'Satar', 'khuziafa'];
const d = [23, 56, 3, 2, 'Number'];

console.log(a, b, d);
const c = a.concat(b, d);

b = a.concat('Bangash', 'Famliy'); first method

console.log(c);

//************************************************************************************
//join(); that make multiple value to convert single array or single string Exmple['khan','jan','annan']
//------------> [khan jan annan]

let a = ['Islamai', 'Colleg', 'university', 'Peshawar'];

let b = a.join(' # ');
console.log(b);
//************************************************************************************
//slice(); used that make new ary we out one or more value form ary Exp:[1,4,5,3,8,7,];
//out put:[4,5,3]; is called slice();

let a = ['Islamai', 'Colleg', 'university', 'Peshawar'];

let b = a.slice(1, 3);
console.log(b);
//************************************************************************************
//splice(); used that can't make new ary but changinge in ary add new value & delete value form ary
// every where ( change index)
let x = ['Islamai', 'Colleg', 'university', 'Peshawar'];

x.splice(2, 0, 'BSSE', 201155); //('Start index', 'howmany(delete)', 'End index(Add new value)');
console.log(x);
//**************************************************************************************************
//isArray(); is used for check ary type its ary or not ary which typse data ary,
//integer and string data type etc. condition (true or false).

let a = ['Islamai', 'Colleg', 'university', 'Peshawar'];
console.log(a);

let a = 20;

const a = 'Afnan';

b = Array.isArray(a);
console.log(b);

next method for if condition
if (Array.isArray(a)) {
        console.log('This is True Array: isArray');
    }
    else {
        console.log('This is False not Array data type Aarray: isArray');
    }
//************************************************************************************
//indexOf(); That perfom find a loaction(index) of the element in array--->(index 0 1 2...)

let x = ['Kashif', 'Talha', 'Aqib', 'Numan', 'Owais', 'Afnan'];
console.log(x);

y = x.indexOf('Afnan');
console.log('index is Afnan: ' + y);
//*****************************************************************************************
//lastindex(); that find last loaction of element form ary its opsite of the indexOf();

let a = ['Kashif', 'Talha', 'Aqib', 'Numan', 'Owais', 'Afnan'];
console.log(a);

y = a.lastIndexOf('Afnan');
console.log('This index for: ' + y);
//*****************************************************************************************
//incude(); that used for element to excist element in array that give tru of false
//(valid elementto showe in ary)

let a = ['Kashif', 'Talha', 'Aqib', 'Numan', 'Owais', 'Afnan'];
console.log(a);

b = a.includes('Numan');
console.log(b);
//***************************************************************************************
//some(); Any one value we pass in condation that one vlaue to match with condation
// after condation excute then give  tru or false

let ages = [2, 5, 8, 18, 14, 15, 16, 18, 25];

let b = ages.some(checkAdult);
console.log(b);

function checkAdult(age) {
    return age >= 25;
}
//*************************************************************************************
//find(); methode returen the value of first element ina ary that give pass True and False
let age = [3, 54, 75, 89, 11, 29, 0, 9, 65, 13,];
console.log(age);

let b = age.find(checkAdult);
console.log(b);

function checkAdult(age) {
    return age >= 29;
}
//###########################################
//findindex(); method returen the value of first element in ary that give pass test (True False)
//check by index ways 
let age = [3, 54, 75, 89, 11, 29, 0, 9, 65, 13,];
console.log(age);

let b = age.findIndex(checkAdult);
console.log(b);

function checkAdult(age) {
    return age >= 29;
}
