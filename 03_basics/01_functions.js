
function addtwonumbers(number1, number2) {
    console.log(number1 + number2);
    
};

addtwonumbers(2, 4)

function add2numbers(number1, number2) {
    let result = number1 + number2
    return result
};

const result = add2numbers(4, 4)
console.log(result);

function add2nombers(number1, number2) {
    
    return number1 + number2
};

const result1 = add2nombers(5, 5)
console.log(result1);

function loginUserMessage(username) {
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} has logged in`
}

console.log(loginUserMessage())

// Rest (...) operator
function calulatecartprice(...num1) {
    return num1
}
console.log(calulatecartprice(100, 200, 300));

const user = {
    username: "Burgess",
    price: 199
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject(user)

handleObject({
    username: "sammy",
    price: 999
})

const myNewArray = [200, 400, 600, 800]

function returnSeonValue(getArray) {
    return getArray[1]
}

console.log(returnSeonValue(myNewArray));

console.log(returnSeonValue([200, 600, 800]));




















