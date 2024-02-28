// primitive data types are stored in stack memory

// string, number, bigint, boolean, undefined, symbol, null


// Referenced data types are stored in Heap memory

//example

// primitive 
let myName = "suresh";

let myName2 = myName;

myName2 = "dheeraj"

// orginal value not change because the primitive data type are not mutable because they stored in the memory as a copy data.
console.log(myName2);
console.log(myName);

// reference 

let heros = ["shaktiman","junior-g","naagraj"];

let myObj = {
    name:"dheeraj",
    contact:78555554
}

let myObj2 = myObj;

// its reference type the copy of original oject value into another object data type change original noe because they pointing same address refernce.

myObj2.name = "kimat";
console.log(myObj2);