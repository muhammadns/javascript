const month = 5;

switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("Fburary")
        break;
    case 3:
        console.log("Marh")
        break;
    case 4:
        console.log("April")
        break;

    default:
        break;
};

let emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Objet is empty");
};

// nullish Coalescing Operator
let val1, val2, val3, val4;
val1 = 5 ?? 10
console.log(val1);

val2 = null ?? 10
console.log(val2);

val3 = undefined ?? 15
console.log(val3);

val4 = null ?? 10 ?? 20
console.log(val4);

// Trinary oprator: 
//condition ? true : false

const i = 100;

i <= 80 ? console.log("lss than 80") : console.log("mor than 80");

