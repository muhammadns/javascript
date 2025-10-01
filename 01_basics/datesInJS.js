// Dates.

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());

let myCreateDate = new Date(2025, 0, 23);
console.log(myCreateDate);
let myCreateDate1 = new Date(2025, 0, 23, 5, 3);
console.log(myCreateDate1);
let myCreateDate2 = new Date("2025-09-27");
console.log(myCreateDate2);

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreateDate2.getTime());

console.log(Math.round(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getFullYear());

console.log(newDate.toLocaleString('default', {
    weekday: "long"
})
);
