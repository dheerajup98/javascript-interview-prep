const myArr = [2,5,8,6,3,7,12];

// Array declaration
// console.log(myArr);

const myArr2 = new Array(5,6,7,3,2,55);
// console.log(myArr2)


// Array method

// push

myArr.push("dheeraj");

// pop

myArr.pop()

// unshift

myArr.unshift("hello everyone")

// shift

myArr.shift()

// length
myArr.length

// slice

const sliceArr = myArr.slice(1,3);

// console.log(myArr)
// console.log(sliceArr)

// differnce of slice and splice in slice they not include last index of array and splice include last index of array and in splice they modified orginal array

const spliceArr  = myArr.splice(1,3)
// console.log(spliceArr)

// merge to array;

const marvel = ["spiderman","ironman","batman"];
const realHeros = ["shaktiman","junior-g","vikraal"];

const mergeArr = [...marvel, ...realHeros];
console.log(mergeArr)

// case 1

const InterestingArr = [2,4,6,[2,56,32,4],56,8,62,[54,6,[25,9,77]]];

const Inters = InterestingArr.flat(Infinity);
console.log(Inters)


console.log(Array.isArray("dheeraj"))

// Array.from  convert to array string to array
console.log(Array.from("dheeraj"))

// intereating case 
// give empty array
console.log(Array.from({name:"suresh"}));


const a = 100;
const b = 200;
const c = 300;

// its convert to an array
console.log(Array.of(a,b,c));