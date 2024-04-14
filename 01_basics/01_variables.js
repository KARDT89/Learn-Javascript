const accountId = 144553
let accountEmail = "tamal@google.com"
var accountPassword = "12345"
accountCity = "Habra"
let accountState;

// accountId = 2 // not allowed

accountEmail = "dt89@google.com"
accountPassword = "212121"
accountCity = "Kolkata"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

