// Objects declear as a literal then it is not Singleton
// but when deleare with constructor then singleton create

// object literals
const mySum = Symbol ("key1")

const JsUser = {
    name: "burgess",
    [mySum]: "myKey1",
    age: 18,
    location: "Alexandria",
    email: "name@google.com",
    isLoggedIn: false,
    lastloginDays: ["Monday", "Saturday"]

}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(typeof JsUser[mySum]);

JsUser.email = "name@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "name@microsoft.com"

console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS user");
    
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS users, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
