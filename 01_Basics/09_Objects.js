//Object banane ke 2 way hai...
//constructor se bnega toh singleton hoga

//symbol declare
const mySym=Symbol("Key1")

//object literals
const JsUser={
    name:"Hitesh",
    age:18,
    // mySym:"mykey1",//symbol lo ..object ki key me add kro..symbol ko as a key use krna hai
    [mySym]:"mykey1",//key ki taah act aise hogi-Interview me
    location:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturaday"]
}
console.log(JsUser.email);//hitesh@google.com
console.log(JsUser.name);
console.log(JsUser["email"])//hitesh@google.com
console.log(typeof JsUser.mySym)//string..means symbol ki tarh mySum use nhi ho rha..
console.log(JsUser[mySym])//brackeet use krna padega access krne ke lie...//mykey1

JsUser.email="hitesh@chatgpt.com"
//Object.freeze(JsUser)//taki email change na ho
JsUser.email="hitesh@microsoft.com"
console.log(JsUser);

//funcn ko variable ki tarah hota hai js me
JsUser.greeting=function(){
    console.log("Hello JS User");   
}
JsUser.greetingTwo=function(){
    console.log(`Hello JS user,${this.name}`);
}
console.log(JsUser.greeting());//Hello JS User
console.log(JsUser.greetingTwo());

//value ko acces krte waqt mainly . use krte hai
//but special cases jaha square bracket use kia jata hai ["email"] aise
