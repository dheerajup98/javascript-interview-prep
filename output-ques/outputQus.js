console.log("javascript output questions..");

// 1.
// function sayHi() {
//     console.log(name);
//     // console.log(age);
//     var name = 'Lydia';
//     // let age = 21;
//   }
  
//   sayHi();

// 2. 
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 2000);
//   }
  
//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 2000);
//   }


// 3.
// const shape = {
//     radius: 10,
//     diameter() {
//       return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius ,
//   };
  
//   console.log(shape.diameter());
//   console.log(shape.perimeter());
//With arrow functions, the this keyword refers to its current surrounding scope, unlike regular functions! This means that when we call perimeter, it doesn't refer to the shape object, but to its surrounding scope (window for example).

// 4.
// const bird = {
//     size: 'small',
//   };
  
//   const mouse = {
//     name: 'Mickey',
//     small: true,
//   };

//   console.log(mouse[bird.size]);
  //In JavaScript, all object keys are strings (unless it's a Symbol). Even though we might not type them as strings, they are always converted into strings under the hood.

  //5.
//   let c = { greeting: 'Hey!' };
//   let d;

//    d = c;
//   c.greeting = 'Hello';
//   console.log(d.greeting);

//6.
// let a = 3;
// let b =  new Number(3);
// let c = 3;

// console.log(a == b);
// console.log(a === b);
// console.log(b === c);
// console.log(typeof b);

// 7.
// class Chameleon {
//     static colorChange(newColor) {
//       this.newColor = newColor;
//       return this.newColor;
//     }
  
//     constructor({ newColor = 'green' } = {}) {
//       this.newColor = newColor;
//     }
//   }
  
//   const freddie = new Chameleon({ newColor: 'purple' });
//   console.log(freddie.colorChange('orange'));


//8.
// let greeting;
// greetign = {}; // Typo!
// console.log(greetign);

// 9.
// function bark() {
//     console.log('Woof!');
//   }
  
//   bark.animal = 'dog';

//   bark();

  //This is possible in JavaScript, because functions are objects! (Everything besides primitive types are objects)

//A function is a special type of object. The code you write yourself isn't the actual function. The function is an object with properties. This property is invocable.

//10.
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
  
//   const member = new Person('Lydia', 'Hallie');
//   Person.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
//   };
  
//   console.log(member.getFullName());

// In JavaScript, functions are objects, and therefore, the method getFullName gets added to the constructor function object itself. For that reason, we can call Person.getFullName(), but member.getFullName throws a TypeError.


//11.
function Person(firstName, lastName) {
    // this.firstName = firstName;
    // this.lastName = lastName;

    return console.log (firstName , lastName);
  }
  
   Person('Lydia', 'Hallie');
//    Person('Sarah', 'Smith');
  
//   console.log(lydia);
//   console.log(sarah);
  