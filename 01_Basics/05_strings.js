//string declaration
const name="Poonam"
const repoCount=50

//outdated
//console.log(name+repoCount+"Value");

console.log(`Hello my name is ${name} and my repo Count is ${50}`);


//string declaration next method
const gameName=new String('hitesh-hc')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));//2 index pe t hai
console.log(gameName.indexOf('t'));//t char konse position pe h

const newString=gameName.substring(0,4)//0 index se index 3 tk hin jayega..4 size
//substring me negative se start nhi kr skte
console.log(newString);//hite

const anotherString=gameName.slice(-8,4)
console.log(anotherString);//piche se

//real use jb web pe user bhout space de deta type krte waqt knowingy deliberalty and wwe don't want to stoe that. so we use trim
//trim
const newStringOne="   Poonam   "
console.log(newStringOne)//no trim
console.log(newStringOne.trim());

//trim start
const greeting="   Hello World   "
console.log(greeting.trimEnd());


//Replace
const url="https:/poonam.com/poonam%20choudary"
console.log(url.replace('%20','-'))//meaans kya mai search kru and kise repalce kru


//want to know ye keyword hai in string ki nhoi
console.log(url.includes('sundar'))//false

console.log(gameName.split('-'));