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
console.log(arrNewObj)
