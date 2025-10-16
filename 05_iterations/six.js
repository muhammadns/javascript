
const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( (item) => {
    console.log(item);
    
} )

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) => num > 4)
const newNums1 = myNums.filter( (num) => {
    return num > 4
} )
console.log(newNums1);

const newNums2 = []
myNums.forEach( (num) => {
    if (num > 4) {
        newNums2.push(num)
    }
} )
console.log(newNums2);

let userBook = book.filter( (bk) => bk.genre === 'history')

userBook = book.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === 'history'
} )
console.log(userBook);











 
