// There are three way to declare variable.

// var, let, const
// But prefer not to use var because issue in block scope and functional scope.

const id = 56666;
var emailId = "dheeraj55@gmmail.com";
let myName = "dheeraj upadhyay";
something = "kya haal";

// when you declared const variable and you can't initalize value to it they through error. Because the rule is initialize the value to const whenever they declared simultaniously.
// const id; You can't change the value; id = 56;

emailId = "du@gmail.com";
myName = "danny";
something= true;

let isLogged;
// they give value undefined, means you declared the value 




console.table([id,emailId,myName,something,isLogged]);