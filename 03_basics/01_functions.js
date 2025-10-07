
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