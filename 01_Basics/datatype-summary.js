// //kis tarike se data ko  memory se access or  rakha jata hai..us basis pe data 2 type ke hai
// //Primitive (7types)

// //7 types : String,Number,Boolean,,null,undefined,Symbol,(copy me change hoti hai)
// // Bignit

// const score=100
// const scoreValue=100.3

// const isLoggedIn=false
// const outsideTemp=null
// let userEmail;//aise undefined hai.. manually v undefined likh skte equal krke

// const id=Symbol('123')
// const anotherId=Symbol('123')

// console.log(id===anotherId);//fasle

// const bigNumber=374972942924863922395n



// //javascript master--onjects+web browser events

// //Reference(Non Permitive)

// //Array,Objects,Functions


// const heros=["shaktiman","naagraj","doga"];
//     //curly bracket ke ander wali objects hai.
//     let myObj={
//         name:"Poonam",
//         age:20,
//     }

//     //we can declare function as avriable
//     const myFunction=function(){  //this is function({})--funcn defnition
//         console.log("Hello world");
//     }

//     //to konw data type of any value
//     console.log(typeof bigNumber);

//     console.log(typeof myFunction);
//     console.log(typeof Symbol);
//     console.log(typeof outsideTemp);



//     | Value      | `typeof` result |
// | -------------- | --------------- |
// | `undefined`    | `"undefined"`   |
// | `null`         | `"object"` ⚠️   |
// | `true / false` | `"boolean"`     |
// | `10`, `10.5`   | `"number"`      |
// | `"Hello"`      | `"string"`      |
// | Normal object  | `"object"`      |
// | Function       | `"function"`    |




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//sTACK AND HEAP MEMORY

//memory 2 types-stack,heap
//jitne bhi primitive type ke hote hai unme satck memory use hoti hai
//aur jitne non primitive hote hai unme heap use hoti hai

//jab object/menory stack ke ander define hoti hai to uski copy milti hai
//and jo heap ke ander.. usme refernec milta hai(orginal value me changes hoti hai)

//stack(Primitive),Heap(Non-Primitive)

let myYoutubename="hitheshchoudharydotcom"

let anothername="myYoutubename"
anothername="chaiaurcode"

console.log(myYoutubename);//hitheshchoudarydotcom
console.log(anothername);//chaiaurcode//coz changes myYutube wale ki copy me hue original me nhi



let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo=userOne
userTwo.email="poonam@google.com"

console.log(userOne.email);//poonam@google.com
console.log(userTwo.email);//poonam@google.com                    


