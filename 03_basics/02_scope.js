// Scope

function one() {
    const username = "Burgess"
    function two() {
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);
    
    two()
}
one()

if (true) {
    const username = "Burgess"
    if (username === "Burgess") {
        const website = " youtube"
        console.log(username + website);
        
    }
    //console.log(website);
    
}
//console.log(username);

// a function can be called before decleration it, like below
console.log(addone(5))

function addone(num) {
    return num + 1
    
}

// a function can NOT be called before decleration it, like below
//addtwo(5)

const addtwo = function (num) {
    return num + 2
}

















