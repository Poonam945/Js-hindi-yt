// let score="33"
// console.log(typeof score);  //string
// console.log(typeof(score)); //string

// let valueInNumber=Number(score)//wo score string hai but is line se no me convert ho rha
// console.log(typeof valueInNumber); //number


//but there is an issue if there is not a possible no
//then how it react.. let's see

let score="33sfydh"
console.log(typeof score);  //string
console.log(typeof(score)); //string

let valueInNumber=Number(score)//wo score string hai but is line se no me convert ho rha
console.log(typeof valueInNumber); //number
console.log(valueInNumber);//Nan coz 33sfydg ye koi no nhi h



//if null hoti

// let score=null
// console.log(typeof score);  //object
// console.log(typeof(score)); //object

// let valueInNumber=Number(score)//wo score string hai but is line se no me convert ho rha
// console.log(typeof valueInNumber);//number 
// console.log(valueInNumber);//0


//"33"=>33
//"33abd"=>Nan
//true=>1;false=>0

