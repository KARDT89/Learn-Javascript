// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Tamal",
    "full name": "Tamal Sarkar",
    [mySym]: "mykey1", // to use as "symbol" datatype
    age: 18,
    location: "Kolkata",
    email: "dt89@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(typeof JsUser[mySym]);

JsUser.email = "Tamal@facebook.com"
// Object.freeze(JsUser)
JsUser.email = "DT89@GAMEZ"
console.log(JsUser.email);
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js user");
}

JsUser.greetingtwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());