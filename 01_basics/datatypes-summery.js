//************************** Primitive **************************

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 56465165465456123178818918n  // put n at the end of number to convert into bigInt datatype



//************************** Reference (Non Primitive) **************************

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj","doga"]

let myObject = {
    name: "DT89",
    age: 22,
}

const myfunction = function(){
    console.log("Hello World");
}

// console.log(typeof myfunction);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)
// https://imgur.com/a/f5QFiFT

let myYoutubeName = "Kardt89"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "dt89@google.com"

console.log(userOne.email);
console.log(userTwo.email);
