// const a = 10;
// let b = 20;
// var c = 30;

// console.table([a,b,c]);

// {
//     const a = 10;
//     let b = 20;
//     var c = 30;
// }

// a and b is not defined give error becuase let and const is an block scope they can't access outside the block.

// console.log(a);
// console.log(b);
// console.log(c);

// But c is an access outside the block scope because var is an function scope.



// scope mini closure 

// function sayHello()
// {
//     const myName = "dheeraj";
  
//     function SayMyname()
//     {
//         console.log(myName);
//     }
//     SayMyname()
// }

// sayHello();


// function hoisted()
// {
//     console.log("whats'app");   
// }

// function another(hoisted){
//       console.log("how");   
// }

// another();


// lexical scope example

// function a()
// {
//     console.log(b);
// }

// var b = 10;
// a();


// -> ex

function x()
{
    const a = 10;
    function y()
    {
    console.log(a);
    }
    y();
  
}

// x();


// temporal dead zone -> From hoising till and intialize some value in let and const the time is known as tempral dead zone.

// what is block scope
// => all function and variable access inside the block.


// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

// shadowing in js

// var a = 100;
// {
//     var a = 200;
//     console.log(a);
// }
// console.log(a);


// let a = 10;
// {
//     let a = 20;
//     console.log(a);
// }

// console.log(a);


// const c = 25;
// {
//     const c = 55;
//     console.log(c);
// }
// console.log(c);

// illegal shadowing


// let a = 25;
// {
//     var a = 55;
//     console.log(a);
// }
// console.log(a);

// how to fix

// bind in function scope

// let d = 25;

// function dku()
// {
//   var d = 47;
//   console.log(d);
// }
// console.log(d);
// dku()

var s = 55;
{
    let s = 88;
    console.log(s);
}
console.log(s);