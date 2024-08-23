// map()


const myNums = [1,2,3,4,5,6,7,8,9,10];

// const myNewNums = myNums.map((i)=>{
//     return i*10;
// })

// console.log(myNewNums);


// by foreach mathod

// const NewNUm = [];

// myNums.forEach((item)=>{
//     NewNUm.push(item*9);
// })

// console.log(NewNUm)



// filter method

const filNums = myNums.filter((i)=> i>=5);

// console.log(filNums)


// reduce method

const reduceNum = myNums.reduce((acc,curr)=> acc+curr,0);

// console.log(reduceNum)

const arrObj = [
    {
        score: 255,
        course:"javascript"

    },
    {
        score: 888,
        course: "java"
    },
    {
        score: 555,
        course: "python"

    }
];


const arrNewObj = arrObj.reduce((acc,item)=>acc+item.score,0);
// console.log(arrNewObj)


// ques

const obj = [
    {firstName: "dheeraj", lastName: "upadhyay", age: 26},
    {firstName: "soumya", lastName: "tiwari", age: 25},
    {firstName: "sahil", lastName: "pandey", age: 55},
    {firstName: "shubham", lastName: "shukla", age: 69}
]

const mapOutput = obj.map((i)=> i.firstName + " " + i.lastName);
// console.log(mapOutput)

const filterAge = obj.filter((i)=> i.age<30);
// console.log(filterAge)

const output = obj.filter((x)=> x.age<30).map((x)=> x.firstName);
// console.log(output)



const myArr = [25,98,6,47,32];

const result = myArr.map((i)=>{
    return i*2;
})

console.log(result);
console.log(myArr.length);

const sum = myArr.reduce((acc,curr)=>{
    return acc = acc+curr;
});

console.log(sum);

const filterArr = myArr.filter((f)=>{
    return f%2===0;
});

console.log(filterArr);