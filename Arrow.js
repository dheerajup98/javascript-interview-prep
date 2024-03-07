const myObj = {
    myName : "dheeraj",
    age : 25,

    saySomething : function ()
    {
        console.log(`my name is ${this.myName} and my age is ${this.age}`);
    }
}

// myObj.saySomething();


// This keyword use in object not in function. 

// Regular function


function one()
{
    let a = "something";
    console.log(this.a);
    console.log(this);
}

// one()
// it givr undefined. And this will give property because they regukar expression in an global scope.


// arrow function 

var arrow = ()=>{
    console.log(this);
}

arrow();

//it give empty object beacuse const let in an block scope not reference to window or this .