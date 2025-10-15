const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swifth: 'swift by apple'
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
};

const programming = ["js", "rb", "java", "py", "cpp"]

for (const key in programming) {
 //     console.log(programming[key]);
      
}
// for each loop

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val) {
 //   console.log(val);
    
} )

coding.forEach( (item) => {
 //   console.log(item);
        
} )

function printMe(item) {
    console.log(item);
     
}
//coding.forEach(printMe)

coding.forEach(  (item, index, arr) => {
    console.log(item, index, arr);
    
})

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








