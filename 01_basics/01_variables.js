const accountId = 144553
let accountEmail = "ashish@google.com"
var accountPassword = "12345"
accountCity = "Bangalore"  // can be done this way but dont use this.
let accountState; // goes undefined without values.

//accountId = 2 // not allowed 

accountEmail = "AM@gcu.com"
accountPassword = "245874"
accountCity = "Mumbai"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
