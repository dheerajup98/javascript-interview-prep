function sayName()
{
    console.log("hello dheeraj upadhyay");
}

sayName();

function sumTwoNo(num1, num2)
{
    return num1 + num2;
}

console.log(sumTwoNo(55,77));


// rest operator

function returnsomething(val1, val2, ...num)
{
    return num;
}

console.log(returnsomething(22,55,77,66,89,320,78));

const user = {
    name:"dheeraj",
    islogged: true
}

function sayHello(myObj)
{
   console.log(`my name is ${myObj.name} and the user is logged ${myObj.islogged}`);
}

sayHello(user);


// first class function -)  If functions in that language are treated like other variables. So the functions can be assigned to any other variable or passed as an argument or can be returned by another function