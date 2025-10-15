// for of loop

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    console.log(num);
    
};

const greetings = "Hello world!";
for (const greet of greetings) {
    console.log(`Each char of ${greet}`);
    
};

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swifth: 'swift by apple'
}
for (const key in myObject) {
    console.log(`${key} shortcut is ${myObject[key]}`);
    
};

// for each loop

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(  function  (val) {
    console.log(val);
    
});

coding.forEach(  (itm) => {
    console.log(itm);
    
});


coding.forEach(  (itm, index, arr) => {
    console.log(itm, index, arr);
    
});


const mycoding = [
    {
        language: "javascript",
        languagefile: "js"
    },
    {
        language: "python",
        languagefile: "py"
    },
    {
        language: "java",
        languagefile: "java"
    }
]

mycoding.forEach(  (itm) => {
    console.log(itm.language);
    
});


// MAP, values are unique and keep the order of values

const map = new Map()
map.set('USA',"United States of Ameria")
map.set('UK',"United Kingdom")
map.set('FR',"France")

console.log(map);

for (const [key, values] of map) {
    console.log(key, ':-', values);
    
}
