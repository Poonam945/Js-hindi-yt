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
console.log(maybeNumber.toPrecision(3));//23.9
console.log(maybeNumber.toPrecision(4));//23.90
console.log(maybeNumber.toPrecision(1));//2e+1

//100000 difficult to read so from below way u can change it in us standard or inidan value
const hundreds=1000000
console.log(hundreds.toLocaleString('en-IN'));