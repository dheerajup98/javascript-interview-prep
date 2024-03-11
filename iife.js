// console.log("immediately invoked function expression");


// IIFE means to create a private scope for variables, preventing them from polluting the global scope.


(function iife(){
    console.log("function called immediately");
}) ();

// named iife


(()=>{
   console.log("normal iife");
})();

// normal iife


((name)=>{
  console.log(`my name is ${name}`);
})("dheeraj");

// passing value