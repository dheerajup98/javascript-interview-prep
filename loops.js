for (let i=1;i<=20;i++)
{
    // console.log(`the value of i is ${i}`);
}

// break

// for(let i=1;i<=10;i++)
// {
//     console.log(`the value  of i is ${i}`);
//     if(i===5)
//     break;
// }

// for(let i=1;i<=10;i++)
// {
//     if(i===5){
//     console.log("detected 5");
//     continue;
//     }
// console.log(`the value of i is ${i}`);

// }


// while loop


// let score =  1;

// while(score<=10)
// {
//     console.log(score);
//     score++;
// }

// do-while

// let i =1;

// do{
//     console.log("dheeraj");
//     i++;
// }while(i<5);




const heros = ["shaktiman","junior-g","spider-man"];

// for(let i=0;i<=heros.length;i++
// {
//     console.log(`the heros are ${heros[i]}`);
// }


// for of loop for array, string

// for(let myHeros of heros)
// {
//     console.log(myHeros);
// }

// const greetings = "hello good morning";

// for(let hi of greetings)
// {
//     console.log(hi)
// }


// Map method and Set 


const myMap = new Map();


myMap.set('name','dheeraj');
myMap.set('age',26);
myMap.set('call','rockstar');

// for(let i of myMap){
//     console.log(myMap)
// }

// for(const [key,value] of myMap)
// {
//     console.log(key,value);
// }




// object iterating

// const myObj = {
//     name:"dheeraj upadhyay",
//     age:26,
//     sayHi: function()
//     {
//         console.log(`hello my name is ${this.name} and my age is ${this.age}`)
//     }
// }

// for(let obj in myObj)
// {
//     console.log(obj);
// }

// console.log(myObj.sayHi())


// forEach loop


// const names = ["suresh","kishore","dheeraj","sambit"];

//  names.forEach((val)=>{
//    console.log(val);
// })


// function sayHi ()
// {
//     console.log('hello dheeraj how are you');
// }

// const greeting = ["suposr","something","array"];

// greeting.forEach(sayHi);


const arrayOfObj = [
    {programminngLanguage:"javascript",programmingFile:"js"},
    {programminngLanguage:"java",programmingFile:"java"},
    {programminngLanguage:"python",programmingFile:"py"}
]

arrayOfObj.forEach((item)=>{
 console.log(item.programminngLanguage)
})