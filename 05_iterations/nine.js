const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval   
}, 0)

console.log(myTotal);

const myTotal1 = myNums.reduce( (acc, currVal) => acc + currVal, 0)
console.log(myTotal1);

const shoppingCart = [ 
    {
    itemName: "js course",
    price: 999
},
    {
    itemName: "py course",
    price: 4999
},
    {
    itemName: "java course",
    price: 9999
}
]

const pricToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(pricToPay);
