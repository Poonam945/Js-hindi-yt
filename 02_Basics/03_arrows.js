const user={
    username:"hitesh",
    price:999,
    welcomeMessage:function(){
        //this->this current context ko refer krta hai
        console.log(`${this.username},welcome to website`);
        console.log(this);//{
                          //username: 'hitesh',
                            //price: 999,
                            //welcomeMessage: [Function: welcomeMessage]
                          //}
    }
}

// user.welcomeMessage()
// user.username="sam" //if username change kr ida..ab kyunki value hardcoded nhi kri thi..so jo bhi current context ke ac tha wo print hua(yani ye)
// user.welcomeMessage()

//console.log(this)//{} coz hum node environment ke ander h.. this refer kr rha empty object ko kyunki gloabal ke ander koi object nhi hai.

//console.log(this)//brower ke ander gloabal object hai->Window


// function chai(){
//     let username="hitesh"
//     console.log(this.username);//undefined.. means this object ke ander thik tha..funcn ke ander noi
// }
// chai()

// const chai =function chai(){
//     let username="hitesh"
//     console.log(this.username);//undefined.. means this object ke ander thik tha..funcn ke ander noi
// }
// chai()


//function ko declare by arrow function
const chai =()=>{
    let username="hitesh"
    console.log(this.username);//undefined.. means this object ke ander thik tha..funcn ke ander noi
}
chai()
//so jo ye khete hai ddiff in arrow funcn or normal funcn me ki arrow me this nhi use kr skte aur usme kr skte..galat hai

//Arrow funcn
//()=>{}
//isko name ke ander hold kr skte
// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
//console.log(addTwo(3,4))//7

//other way to use arrow funcn.(implicit return)
// const addTwo=(num1,num2)=>num1+num2
// const addTwo=(num1,num2)=>(num1+num2)
// console.log(addTwo(3,4))//7
//curly bracket likhoge to return padega, parenthesis loge toh return nhi

//AGar object return krna ho toh
const addTwo=(num1,num2)=>({username:"hitesh"})//obj define krne ke lie parenthesi ka use krna hin padega
console.log(addTwo(3,4))//7


//aur arrow funcn array loop waagera me use hote hai
const myArray=[2,5,3,7,8]
myArray.forEach(function(){})
myArray.forEach(()=>{})//or by arrow funcn