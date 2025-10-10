//Due to global solution pullotion us iife
// wrap the funtion in () and another () at the end.
// Must use ; after 2nd ()

(function chai() {
    console.log(`DB Connected`);
    
})();

// Use () in arrow function

( (name) => {
    console.log(`DB Connected two ${name}`);
    
}
)("Burgess");

