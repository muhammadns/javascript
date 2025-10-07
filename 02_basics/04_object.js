// Singleton
const tinderUsr = new Object();

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUsr);
console.log(tinderUser);

const regularUser = {
    email: "name@gmail.com",
    fullname: {
      userFullName: {
        firstName: "Burgess",
        lastName: "Group"
      }
    }
}
console.log(regularUser.fullname.userFullName);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
//const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    coursename: "Javascript",
    price: "999",
    courseInstructor: "Burgess"
}
const {coursename} = course
console.log(coursename);

const {courseInstructor: instructor} = course
console.log(instructor);
