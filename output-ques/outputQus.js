// console.log("javascript output questions..");

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
// function Person(firstName, lastName) {
    // this.firstName = firstName;
    // this.lastName = lastName;

  //   return console.log (firstName , lastName);
  // }
  
  //  Person('Lydia', 'Hallie');
//    Person('Sarah', 'Smith');
  
//   console.log(lydia);
//   console.log(sarah);
  
//12.
// function sum(a, b) {
//   return console.log(a + b);
// }

// sum(1, '2');

//13.
// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);

//14.
// function getPersonInfo(one, two, three) {
//   console.log(one);
//   console.log(two);
//   console.log(three);
// }

// const person = 'Lydia';
// const age = 21;

// getPersonInfo`${person} is ${age} years old`;

//15.
// function checkAge(data) {
//   if (data =={ age: 18 }) {
//     console.log('You are an adult!');
//   } else if (data == { age: 18 }) {
//     console.log('You are still an adult.');
//   } else {
//     console.log(`Hmm.. You don't have an age I guess`);
//   }
// }

// checkAge({ age: 18 });

//16.
// function getAge(...args) {
//   console.log(typeof args);
// }

// getAge(12);

//17.
// function getAge() {
//   'use strict';
//   age = 21;
//   console.log(age);
// }

// getAge();

//18.
const sum = eval("10*20+89");
// console.log(sum);

//eval evaluates code that's passed as a string. If it's an expression, like in this case, it evaluates the expression. The expression is 10 * 10 + 5. This returns the number 105.

//19.
var num = 8;
var num = 10;

// console.log(num);

//20.
// const obj = { 1: 'a', 2: 'b', 3: 'c' };
// const set = new Set([1, 2, 3, 4, 5]);

// obj.hasOwnProperty('1');
// obj.hasOwnProperty(1);
// set.has('1');
// set.has(1);

//All object keys (excluding Symbols) are strings under the hood, even if you don't type it yourself as a string. This is why obj.hasOwnProperty('1') also returns true

//21.

// const obj = { a: 'one', b: 'two', a: 'three' };
// console.log(obj);

//If you have two keys with the same name, the key will be replaced.


//22.
for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  // console.log(i);
}

//23.
String.prototype.giveLydiaPizza = () => {
  return 'Just give Lydia pizza already!';
};

const name = 'Lydia';

// console.log(name.giveLydiaPizza())

//24.
const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = 123;
a[c] = 456;

// console.log(a[b]);


//25.
const foo = () => console.log('First');
const bar = () => setTimeout(() => console.log('Second'));
const baz = () => console.log('Third');

// bar();
// foo();
// baz();


//26.
{/* <div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div> */}

//The deepest nested element that caused the event is the target of the event. You can stop bubbling by event.stopPropagation.

//27.
{/* <div onclick="console.log('div')"> */}
  {/* <p onclick="console.log('p')">
    Click here!
  </p>
</div> */}


//28.
const person = { name: 'Lydia' };

function sayHi(age) {
  return `${this.name} is ${age}`;
}

// console.log(sayHi.call(person, 21));
// console.log(sayHi.bind(person, 21));


//30.
function sayHi() {
  return (() => 2)();
}

// console.log(typeof sayHi());

//The sayHi function returns the returned value of the immediately invoked function expression (IIFE). This function returned 0, which is type "number"

//31.
0;
new Number(0);
('');
(' ');
new Boolean(false);
undefined;

//falsy value are -> 0, (""), undefined

//32.
// console.log(typeof typeof 1);

//33.
const numbers = [1, 2, 3];
numbers[10] = 11;
// console.log(numbers);


//34.
// (() => {
//   let x, y;
//   try {
//     throw new Error();
//   } catch (x) {
//     (x = 1), (y = 2);
//     console.log(x);
//   }
//   console.log(x);
//   console.log(y);
// })();


//35.
const r   = [[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);

// console.log(r);

//36.
// setInterval(() => console.log('Hi'), 1000);


//37.
[...'Lydia'];
//A string is an iterable. The spread operator maps every character of an iterable to one element.

//38.
function* generator(i) {
  yield i;
  yield i * 2;
}

const gen = generator(10);

// console.log(gen.next().value);
// console.log(gen.next().value);

//39.
// const firstPromise = new Promise((res, rej) => {
//   setTimeout(res, 500, 'one');
// });

// const secondPromise = new Promise((res, rej) => {
//   setTimeout(res, 100, 'two');
// });

// Promise.race([firstPromise, secondPromise]).then(res => console.log(res));

//40.
// let person1 = { name: 'Lydia' };
// let members = [person];
// person = null;

// console.log(members);


const arr = [25,89,36,75];

arr.forEach((value,index,array)=>{
  return array[index]= value*10;
})

// console.log(arr);

const arr1 = [1,2,3,4,5,6];
const arr2 = [];

arr1.forEach((i)=>{
  return arr2.push(i*2);
});

// console.log(arr2);

const pro = new Promise((res,rej)=>{
   setTimeout(()=>{
    res("resolved successfully");
   },1000);
  });
