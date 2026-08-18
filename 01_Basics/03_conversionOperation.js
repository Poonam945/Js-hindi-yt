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

/*********************Operations******************/

//let value=3;
//let negvalue=-value;
//console.log(negvalue);

console.log(2+2);//4
console.log(2*2);//4
console.log(2**2);//4 power h
console.log(2**5);//32
console.log(2%5);//2


let str1="hello"
let str2="hitesh"

let str3=str1+str2
console.log(str3);


//readeabilty nhi hai..don't write like this.
console.log("1"+2);//12
console.log(1+"2");//12
console.log("1"+2+2);//122
console.log(1+2+"2");//32

//bad code
console.log(+true);//1
console.log(+"");//0

let gameCounter=100
gameCounter++;
console.log(gameCounter);


//04_Comparison

//console.log(2>1);
//console.log(2!=1);

console.log("2">1);//t
console.log("02">1);//t


//we avoid this type of conversion.
console.log(null==0)//false //null sirf undefined ke equal hota hai, 0 ke nahi.
console.log(null>0)//false
console.log(null>=0)//true
//coz == → null has a special equality rule → null == 0 is false.
//> < >= <= → null converts to 0.

//“Equality check == and comparisons > < >= work differently.

console.log(undefined==0)//false
console.log(undefined>0)//f
console.log(undefined>=0)//f

//strickly check

console.log("2"===2);//false
