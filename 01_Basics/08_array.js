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



//02_arrays
const marvel_heros=["thors","ironman","spidermnan"]
const dc_heros=["superman","flash","batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)//[ 'thors', 'ironman', 'spidermnan', [ 'superman', 'flash', 'batman' ] ]
 //so from above u can se that push se..array ko eke lement ki taarah lia 4th element.. coz array koi bhi data le leta ahi
// console.log(marvel_heros[3][1]);//flash
//but above it not right way..isse toh merge bhi nhi hua


//doing concat
//to use this new array Make so concat ke bad whi console krne ke lie

// const allHeros=marvel_heros.concat(dc_heros)
// console.log(allHeros)


//another method easy then concat..//spread
const all_new_heros=[...marvel_heros, ...dc_heros]
console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Hitesh"))//false
console.log(Array.from("Hitesh"))//[ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name:"hitesh"}))//[] intresting question for q

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));//when multiple variable ko array me convert krne ke lie