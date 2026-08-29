// here-funcion->keyword
//      anyname->funcn name
//      ()->parenthesis
//      {}->syntax
function anyname(){
    //isme func ka scope/defn likhte hai
        console.log("P");
             console.log("o");
                  console.log("0");
                       console.log("n");
                            console.log("a"),
                                 console.log("m")

                                 }
                                 anyname()//funcn ka refernce

                                 //Add 2 nos
                                 //funcn ke defn ke ander jo value hoti hai use parameter kehte hai
                                 function addTwonumbers(number1,number2){//javascript me numbers ka data type dena need nhi hota
                                     console.log(number1+number2);
                                         //console mtlbb ye nhi ki funcn wo value return v kr rha..
                                         }
                                         //&jb funcn ko call krte hai tb jo uske ander value pass krte hai use Argument kehte h
                                         addTwonumbers(3,2)
                                         addTwonumbers(3,"2")//32
                                         // addTwonumbers(3,null)
                                         //ab javascript me variable ke ander v store kr skte h jese
                                         //const result=addTwonumbers(3,5)//8 but result ki value hai undefined
                                           // console.log("Result:",result)//Result: undefined

                                             function addTwonumbers(number1,number2){
                                                 let result=number1+number2
                                                     return result
                                                     console.log("Poonam")//not print
                                                      }

                                                       const result=addTwonumbers(6,7)
                                                        console.log("Result:",result);
function loginUserMessage(username){
    if(username==undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Poonam"))
  //if i keep empty
console.log(loginUserMessage("")) 
//jb kuch pass hin na kre tb undefined ayegi
console.log(loginUserMessage())   
 //so through if else->if undefined return->no ned to go further     
 //or u can do.. in javascript->if("") is false
                                 //if(undefined)is false & false ke ander loop excute nhi hoti 
                                 //so use this if(!username)means undefined ho gyaa                         
                                                        

//but u want that user don't that kind of value..
//then dafult set kr do

//function loginUserMessage(username="sam")
//if ke ander jayenge hin nhi... kyunki username ki value ab kabhi bhi undefined nhi hogi.. agar kuchv pass nhi krogi still sam is there..


//In shopping Cart, user item add krte jata hai..so we dk aur kitne items ane wale hai.. bs sbki price add krni hoti hai.
//so we need ready the parameter usi hisab se

function calculatecartprice(num1){
    return num1
}
console.log(calculatecartprice(200))


function calculatecartprice(...num1){
    return num1
}
console.log(calculatecartprice(200,400,800))


function calculatecartprice(val1,val2,...num1){
    return num1
}
console.log(calculatecartprice(200,400,500,2000))
