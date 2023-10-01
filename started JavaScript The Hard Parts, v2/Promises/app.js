// function  promise(val){
//     let promiseEx = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(val)
//         },0);
//     })
//    for(let i = 0; i < 10; i++ ){
//     console.log(promiseEx);
//    }
//     return promiseEx
// }
// console.log(promise("raj").then((result)=>{
//     console.log(result)
// }));

// let weather = getFunction()
// console.log(weather);

// function getFunction(){
//    setTimeout(()=>{
//     return '20 deg'
//    },2000)
// }



let newPromise = getData();
let result
console.log(newPromise);
function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve(result = 'hello')
        },2000)
    })
   
}
newPromise
.then((value)=>{
    result = value;
    console.log(result);
    return result
})
.then((value)=>{
    result = 'bye';
    // console.log(result);
    return result;
})
.then((val)=>{
    console.log(val);
});

function wordsWhichStartsWithLetteA(){
    let arr = ["alex", "likes", "Apple"];
    return arr.map((element,index,arrs)=>{
        if(element.charAt(0).toLowerCase() === "a"){
            return arrs[index];
        }
    }).filter((value)=> value !== undefined)
}
console.log(wordsWhichStartsWithLetteA());


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,-1];

// let result = true;

// numbers.forEach((val)=>{
//     if(val < 0 ){
//         result = false
//     }
// })
// console.log(result);


// function reverseEachString(){
//     let str = "this is javaScript code";
//     let reverse = str.split("").map(( _ ,index,arr)=>{
//         return arr[arr.length - 1 - index]
//     });
//     return reverse.join("")
// }
// console.log(reverseEachString());



function outer(){
    let counter = 0
    function inner(){
       if(counter < 5){
        counter++
        return counter
       }else{
        console.log('this function is cannot run more then 5 times');
       }
    }
    return inner
}
let first = outer()
let second = first()
let third = outer()
console.log(first());
console.log(second);
console.log(third());
console.log(first());

 



function max(){
let arr=[3,18,20,11,30,22]
let max;
max=arr[0];

for(let i =0; i<=arr.length; i++) {
    if(arr[i] > max){
        max = arr[i]
    }
}
// document.write(`the max no is ${max}`)
return max;
}
console.log(max());



let map = new Map()

map.set('1','str');
map.set(1,'null');

// console.log(map.delete('1'));
console.log(map.keys());

for(let key of map.keys()){
    console.log(key);
}


let john = {name:"john"};
let ben = {name: "Ben"};

let visitsCount = {};
visitsCount[ben] = 123;
visitsCount[ben] = 243;

// console.log(visitsCount);

let map2 = new Map([
    [1,'one'],
    [2,[1,2,3]],
    [3, 'three']
])
console.log(map2);

let obj = {
    name: "John",
    age: 30
  };


let obj2 = new Map(Object.entries(obj))
console.log(obj2);


let map3 = new Map();
map3.set('banana', 1);
map3.set('orange', 2);
map3.set('meat', 4);

let newObj = Object.fromEntries(map3.entries());
console.log(newObj);



