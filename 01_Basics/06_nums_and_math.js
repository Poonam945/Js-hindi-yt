const score=400
console.log(score);

//new object define kr rhi..jo number type ka hai
const balance=new Number(100)
console.log(balance);// [Number: 100]

console.log(balance.toString());//100 balance ko to string krnege toh no 100 hin hai but type of string hai.
//check the length of string u will 3 of 100
console.log(balance.toString().length);//3

console.log(balance.toFixed(1));
console.log(balance.toFixed(3));

//precison.study more abt that
const otherNumber=123.8966
console.log(otherNumber.toPrecision(4));//123.9
console.log(otherNumber.toPrecision(1));//123.9

const maybeNumber=23.8966
// console.log(maybeNumber.toPrecision(3));//23.9
// console.log(maybeNumber.toPrecision(4));//23.90
// console.log(maybeNumber.toPrecision(1));//2e+1

//100000 difficult to read so from below way u can change it in us standard or inidan value
const hundreds=1000000
//console.log(hundreds.toLocaleString('en-IN'));


//+++++++++++++++++++ Math  +++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4))//abs for sign change.. only minus value +ve hoti h
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.9));//5 //ceil means round krek top value lega
// console.log(Math.floor(4.9));//4
// console.log(Math.sqrt(25))//5
// console.log(Math.tanh(90))//1
// console.log(Math.cbrt(64));//4
// console.log(Math.min(5,9,3));//3
console.log(Math.random());// Math.random 0 and 1 ke beech value hogi always
console.log(Math.random()*10);
console.log(Math.random()*10+1);//but when u * into 10.. value goes like,if it is 0.1 then ayegi 0..so to avoid this case added 1
//to value ab define ayegi 1 t0 9 ke beech


//but sometimes we need to define min and max.. as we will do Math.random but instead  multiply by 10 we did (max-min+1) taki is range ke ander value aye and +1 coz 0 case avoid krne ke lie
//7 min toh min range wali chayie hin so added min.
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)





