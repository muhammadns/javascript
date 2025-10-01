// if >, <, >=, <=, ==, ===, !=, !==

const isUserLogged = true;

if(isUserLogged) {
    console.log("User is logge in.");
}
else {
    console.log("User is not logged in")
};
console.log("Executed");

const score = 200;

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`)
}
    console.log(`User power: ${score}`)

const balance = 1000;

if (balance < 500) {
    console.log("Less than 500")
} else if (balance < 750) {
    console.log("Less than 750")
} else if (balance < 900) {
    console.log("Less than 900")
}  else {
    console.log("less than 1200")
};

const userloggedin = true;
const creditCard = false;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userloggedin && creditCard) {
    console.log("Allowed to buy")
} else {
    console.log("Not allowed to buy")
};

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in")
};
