
const mySym =  Symbol();

// object literals
const myObj = {
    name:"dheeeraj",
    age:26,
    isLogged: true,
    "full name":"suresh upadhyay",
    [mySym] : 26,
    myFunc : function()
    {
        console.log("user logged");
    }
}

// console.log(myObj["full name"]);

// console.log(myObj["age"]);

// console.log(myObj [mySym])

myObj.age = 28;
Object.freeze(myObj)

// object.freeze() they freezing the vallue we can't change or modified.
mySym.age = 26;
// console.log(myObj)





// singleton object

 const obj1 = new Object();


  obj1.name = "dheeraj",
  obj1.email = "dheerajup25#@gmail.com",
  obj1.age = 26

//  console.log(obj1)

// console.log(Object.keys(obj1))
// console.log(Object.values(obj1))


const obj3 = {
    myName: "dheeraj upadhyay",
    islooged:{
         something: true,
         no: 1,
         dheeraj:{

         }

    }
}


const one1 = {1:'a',2:'b'};
const two2 = {3:'c',4:'d'};

const clone = {...one1, ...two2}
console.log(clone);

// or Object.assign()

console.log(two2.hasOwnProperty(4));