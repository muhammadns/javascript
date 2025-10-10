const user = {
    username: "Burgess",
    prie: 999,

    welcomeMeessage: function() {
       console.log(`${this.username}, welome to website`);
       console.log(this);
        
    }
}


//user.welcomeMeessage()
//user.username = "Sammy"
//user.welcomeMeessage()

//console.log(this);

function chai() {
    console.log(this);
    
}

//chai()

const chai1 = function () {
    let username = "Burgess"
    console.log(this.username);
    
}

//chai1()

const chai2 = () => {
    let username = "Burgess"
    console.log(this);
    
}

//chai2()

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(2, 7))

const addTwo1 = (num1, num2) => num1 + num2

console.log(addTwo1(4, 2))

const addTwo2 = (num1, num2) => (num1 + num2)

console.log(addTwo2(1, 4))

// to return an object need to wrap it in ().
const addTwo4 = (num1, num2) => ({username: "Burgess"})

console.log(addTwo4(4, 2))
