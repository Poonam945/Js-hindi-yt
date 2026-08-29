//Iife->Gloabal scope pollution hoti hai kai bar..to us gloabol scope ke varaiables,ya jo bhi pollution usko hatane ke liye iffe ka use kiyaa
//iife->jo function immediately excute ho jaye

//named iife->coz chai name dala hai isliye
(function chai(){
    console.log(`DB CONNECTED`);
})();//SEMICOLON IS IMP HERE TO STOP LIEN HERE.TAKI AAGE WALA CHLE

//unnamed iife
//ab above funcn koo arrow funcn ke through bhi likh skte
(()=>{
    console.log(`DB COONECTED tWO`);  
})();


//AB CONSOLE WALE ME EK VARIABLE BHI DAL SKTE..
((name)=>{
    console.log(`DB COONECTED tWO ${name}`);  
})('POOnam')