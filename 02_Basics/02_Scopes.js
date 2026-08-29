function one(){
    const username="poonam"

    function two(){
        const website="youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}
one()

//so child if.parent wale ko acces kr skte hai.. bt not vice versa


if(true){
    const username="Poonam"
    if(username==="Poonam"){
        const website="youtube"
        console.log(username+website);
    }
    //console.log(website);//error coz website not defined here
}
//console.log(username);


//+++++++++++++++++++++Intresting+++++++++++
//funcn ko aise declare kr skte
addone(5)
function addone(num){
    return num+1
}

addTwo(5)
//funcn ko aise v declare kr kste..ek variable me leke
const addTwo=function(num){
    return num+2
}
// addTwo(5)

//but if i put addTwo(5)on up of the funcn it will give error..
// 2nd type ka funcn bna rhe ho... to access phel nhi kr kste..