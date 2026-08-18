const accountId=144553
let accountEmail="poonam@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState

//accountId=2 // node allowed
console.log(accountId)

/*
Prefer not to use var bcz of issue
in block scope and functional scope.
*/

accountEmail="hy@gmail.com"
accountPassword="132689"
accountCity="Bengaluru"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

