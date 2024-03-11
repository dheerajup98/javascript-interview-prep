// const a = 10;
// let b = 20;
// var c = 30;

// console.table([a,b,c]);

{
    const a = 10;
    let b = 20;
    var c = 30;
}

// a and b is not defined give error becuase let and const is an block scope they can't access outside the block.

// console.log(a);
// console.log(b);
console.log(c);

// But c is an access outside the block scope because var is an function scope.



// scope mini closure 

function sayHello()
{
    const myName = "dheeraj";
  
    function SayMyname()
    {
        console.log(myName);
    }
    SayMyname()
}

sayHello();


// function hoisted()
// {
//     console.log("whats'app");   
// }

// function another(hoisted){
//       console.log("how");   
// }

// another();