//Dates

let myDate=new Date()
console.log(myDate);//2026-08-22T16:04:31.987Z
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());//8/22/2026
console.log(myDate.toJSON());//2026-08-22T16:08:18.113Z
console.log(myDate.toDateString());//Sat Aug 22 2026
console.log(typeof myDate);//object
//date object hai coz we creadted date iska instance myDate hai

//any specific date want to declare krna ho
let mycreatedDate=new Date(2023, 0, 23)//in js month start from 0
console.log(mycreatedDate.toDateString())//Mon Jan 23 2023

//Ab date time aur chayie then
let myNewDate=new Date(2026, 8, 22,11,22)
console.log(myNewDate.toLocaleString());//9/22/2026, 11:22:00 AM

//now in form of mm/dd/yy
let myonDate=new Date("08-23-2026")
console.log(myonDate.toLocaleString());//8/23/2026, 12:00:00 AM

//TimeStamp
//when u want to design poll in js
let myTimeStamp=Date.now()
console.log(myTimeStamp);  //1787439502780
console.log(mycreatedDate.getTime());//1674432000000

//seconds me convert
console.log(Math.floor(Date.now()/1000));//1787439938

let myNewDate


