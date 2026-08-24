//array
const myArr=[0,1,2,3,4,5]
const myHeros=["shaktiman","naagraj"]

const myArr2= new Array(1,2,3,4)
// console.log(myArr[0]); //0


//Array Methods
myArr.push(6)
// console.log(myArr); //[ 0, 1, 2, 3,4, 5, 6]
myArr.pop()//pop only last value ko remove krta hai..no argument need
// console.log(myArr);

myArr.unshift(9)//[9, 0, 1, 2, 3, 4, 5 ]
myArr.shift() //[ 0, 1, 2, 3, 4, 5 ]

// console.log(myArr.includes(9));//false//check krta hai 9 is present or not
// console.log(myArr.indexOf(3));//means 3 konse index pe hai

const newArr=myArr.join()
// console.log(myArr);//[ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr);//0,1,2,3,4,5
// console.log(typeof newArr);//joint ne array kko bind v kr dia aur string me v convert kr dia


//slice ,splice

console.log("A",myArr);//A [ 0, 1, 2, 3, 4, 5 ]
const myn1=myArr.slice(1,3)//3 not include..3 index

console.log(myn1);//[ 1, 2 ]
console.log("B",myArr);//B [ 0, 1, 2, 3, 4, 5 ]

const myn2=myArr.splice(1,3)
console.log(myn2);//[ 1, 2, 3 ]
console.log("C",myArr);//C [ 0, 4, 5 ]

//so the diff bet slice & splice is not that in splice included..
//also that the in array the elements goes on(chle gai)..